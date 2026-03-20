import os

def cleanup_footer():
    """
    Remove any line that contains the legacy footer link.
    """
    target_line = "### 🔗 [ricardotecpro.github.io](https://ricardotecpro.github.io/)"
    count = 0
    for root, dirs, files in os.walk("."):
        # Skip system and build directories
        if any(skip in root for skip in ("_site", ".git", "node_modules", ".gemini")):
            continue
            
        for file in files:
            if file.endswith(".md"):
                path = os.path.join(root, file)
                try:
                    with open(path, "r", encoding="utf-8") as f:
                        lines = f.readlines()
                    
                    found = False
                    new_lines = []
                    for line in lines:
                        if target_line in line:
                            found = True
                            continue
                        new_lines.append(line)
                    
                    if found:
                        with open(path, "w", encoding="utf-8") as f:
                            f.writelines(new_lines)
                        count += 1
                        print(f"Fixed: {path}")
                except Exception as e:
                    print(f"Error processing {path}: {e}")
                    
    print(f"\n--- Cleanup Finished ---")
    print(f"Total files cleaned: {count}")

if __name__ == "__main__":
    cleanup_footer()
