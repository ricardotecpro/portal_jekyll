---
layout: default
title: Índice de Conteúdos
---

# 📚 Índice Mestre de Aprendizagem

Bem-vindo ao portal de conteúdos. Abaixo você encontrará o índice organizado por módulos, especializações e guias extras, além de links diretos para as páginas principais.

---

## 🚀 Páginas Principais
* **[Guia Full Stack](full_stack.html)**: Navegando por Todas as Camadas de Desenvolvimento.
* **[Trilhas de Aprendizagem](projetos2.html)**: Visão geral dos módulos e projetos.
* **[Testes de Recursos](tests.html)**: Verificação de renderização (Mermaid/MathJax).

---

## 🏛️ Módulos (Caminho Fundamental)
{% assign mods = "mod_01_fundamentos_da_computacao,mod_02_logica_e_algoritmos,mod_03_design_de_interfaces_com_figma,mod_04_html5_e_css3,mod_05_javascript_fundamentos_e_dom,mod_06_versionamento_com_git_e_github,mod_07_backend_e_apis,mod_08_bancos_de_dados_sql_e_nosql,mod_09_estruturas_de_dados,mod_10_paradigmas_e_padroes_de_projeto,mod_11_qualidade_e_testes_de_software,mod_12_desenvolvimento_seguro,mod_13_devops_e_cloud" | split: "," %}
{% for mod in mods %}
* **[{{ mod | replace: '_', ' ' | capitalize }}]({{ mod }}/)**
{% endfor %}

---

## 🎯 Especializações
{% assign specs = "spec_backend_com_golang,spec_backend_com_java_e_springboot,spec_backend_com_php_e_laravel,spec_backend_com_python,spec_frontend_com_angular,spec_frontend_com_react,spec_ia_com_redes_neurais,spec_mobile_multiplataforma_com_flutter,spec_mobile_nativo_kotlin_swift,spec_seguranca_avancada_e_criptografia,spec_sistemas_com_c,spec_sistemas_com_cpp,spec_sistemas_com_rust,spec_typescript_javascript_profissional" | split: "," %}
{% for spec in specs %}
* **[{{ spec | replace: '_', ' ' | capitalize }}]({{ spec }}/)**
{% endfor %}

---

## 🛠️ Guias Extras
{% assign extras = "extra_guia_de_ferramentas,extra_guia_de_markdown,extra_guia_de_modelagem_uml,extra_guia_de_redes" | split: "," %}
{% for extra in extras %}
* **[{{ extra | replace: '_', ' ' | capitalize }}]({{ extra }}/)**
{% endfor %}

---

* **[Contatos](https://ricardotecpro.github.io/contatos.html)**
* **[GitHub](https://ricardotecpro.github.io/)**
