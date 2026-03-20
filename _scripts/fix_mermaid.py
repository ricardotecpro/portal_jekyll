import os
import re

def fix_mermaid_syntax(content):
    """
    Finds mermaid blocks and applies fixes for common syntax errors:
    1. Quotes node labels containing special characters like (), <br/>, etc.
    2. Quotes edge labels containing internal double quotes.
    3. Escapes internal double quotes by doubling them.
    4. Quotes subgraph names.
    """
    mermaid_pattern = re.compile(r"(```mermaid\n)(.*?)(\n```)", re.DOTALL)
    
    def fix_block(match):
        prefix, block, suffix = match.groups()
        lines = block.split('\n')
        new_lines = []
        for line in lines:
            # 1. Quote node labels in [] that contain (), <br/>, or unquoted quotes
            # Example: A[Label (info)] -> A["Label (info)"]
            line = re.sub(r'(\b\w+)(\[)([^"\n].*?[()<>/"].*?)(\])', r'\1\2"\3"\4', line)
            
            # 2. Fix labels in edges: -- Label --> -> -- "Label" -->
            # Match -- then any text that contains " but isn't already surrounded by "
            line = re.sub(r'(--\s*)([^"\s][^"\n]*?"[^"\n]*?)\s*(-->)', r'\1"\2"\3', line)
            
            # 3. Escape internal double quotes inside already quoted labels ["..."] or -- ["..."] -->
            # Mermaid requires doubling quotes: "Text ""quoted"" text"
            if '["' in line and '"' in line:
                def escape_node_label(m):
                    id_part, open_part, label, close_part = m.groups()
                    inner_fixed = label.replace('"', '""')
                    return id_part + open_part + inner_fixed + close_part
                
                # Match node labels: ID["Label"]
                line = re.sub(r'(\b\w+)(\[")(.*?)("\])', escape_node_label, line)
                
                def escape_edge_label(m):
                    prefix_part, q_open, label, q_close, suffix_part = m.groups()
                    inner_fixed = label.replace('"', '""')
                    return prefix_part + '"' + inner_fixed + '"' + suffix_part
                
                # Match edge labels: -- "Label" -->
                line = re.sub(r'(--\s*)(")(.*?)(")(\s*-->)', escape_edge_label, line)
            
            # 4. Quote subgraph names if they are unquoted
            line = re.sub(r'(subgraph\s+)([^"\s][^"\n]*)', r'\1"\2"', line)
            
            new_lines.append(line)
            
        return prefix + '\n'.join(new_lines) + suffix

    return mermaid_pattern.sub(fix_block, content)

def process_files():
    count = 0
    for root, dirs, files in os.walk("."):
        if any(skip in root for skip in ("_site", ".git", "node_modules", ".gemini")):
            continue
            
        for file in files:
            if file.endswith(".md"):
                path = os.path.join(root, file)
                try:
                    with open(path, "r", encoding="utf-8") as f:
                        content = f.read()
                    
                    fixed_content = fix_mermaid_syntax(content)
                    
                    if fixed_content != content:
                        with open(path, "w", encoding="utf-8") as f:
                            f.write(fixed_content)
                        count += 1
                        print(f"Fixed Mermaid: {path}")
                except Exception as e:
                    print(f"Error processing {path}: {e}")
                    
    print(f"\n--- Mermaid Fix Finished ---")
    print(f"Total files updated: {count}")

if __name__ == "__main__":
    process_files()
