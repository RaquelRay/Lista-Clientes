Aplicação desenvolvida para o teste prático da Flávio Ribeiro Contabilidade.  
Permite visualizar, pesquisar e gerenciar clientes de forma intuitiva e responsiva.

Funcionalidades Implementadas:

Essenciais
- **Listagem de clientes** - Consome a API pública JSONPlaceholder e exibe os dados em cards
- **Pesquisa em tempo real** - Filtra clientes por nome, email ou empresa
- **Design responsivo** - Adapta-se a diferentes tamanhos de tela (mobile-first)
- **Tratamento de loading** - Skeleton screens animados enquanto os dados carregam
- **Tratamento de erros** - Mensagens amigáveis com opção de tentar novamente
- **Navegação entre páginas** - Detalhes do cliente em página separada (React Router)

Diferenciais Implementados
- **Debounce na pesquisa** - Delay de 500ms para evitar múltiplas requisições
- **Ordenação alfabética** - Ordena clientes por nome (A-Z / Z-A)
- **Paginação** - Exibe 6 clientes por página com navegação intuitiva
- **Tema claro/escuro** - Alternância entre temas com persistência no localStorage


Tecnologias e Bibliotecas:
| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| **React** | 18.2.0 | Biblioteca principal para construção da interface |
| **Vite** | 5.0.0 | Build tool e servidor de desenvolvimento |
| **Tailwind CSS** | 3.4.0 | Estilização com classes utilitárias |
| **React Router DOM** | 6.20.0 | Navegação entre páginas |
| **Axios** | 1.6.0 | Requisições HTTP para a API |


Estrutura do Projeto:
src/
├── components/ # Componentes reutilizáveis
│ ├── ClientCard.jsx # Card individual do cliente
│ ├── ClientList.jsx # Lista de clientes com skeleton
│ ├── Pagination.jsx # Controles de paginação
│ ├── SearchBar.jsx # Barra de pesquisa com debounce
│ ├── SkeletonCard.jsx # Skeleton para loading
│ ├── SortButton.jsx # Botão de ordenação
│ └── ThemeToggle.jsx # Alternador de tema
├── contexts/ # Contextos React
│ └── ThemeContext.jsx # Gerenciamento do tema
├── hooks/ # Custom Hooks
│ └── useDebounce.js # Debounce para pesquisa
├── pages/ # Páginas da aplicação
│ └── ClientDetails.jsx # Detalhes do cliente
├── services/ # Integração com APIs
│ └── api.js # Configuração do Axios e endpoints
├── App.jsx # Componente principal
├── App.css # Estilos globais
└── main.jsx # Ponto de entrada