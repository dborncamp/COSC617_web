set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'

" The following are examples of different formats supported.
" Keep Plugin commands between vundle#begin/end.
" plugin on GitHub repo
Plugin 'tpope/vim-fugitive'
" plugin from http://vim-scripts.org/vim/scripts.html
Plugin 'L9'
Plugin 'Valloric/YouCompleteMe'
Plugin 'flazz/vim-colorschemes'
Plugin 'vim-airline/vim-airline'
Plugin 'vim-airline/vim-airline-themes'
Plugin 'scrooloose/syntastic'
Plugin 'pangloss/vim-javascript'
Plugin 'elzr/vim-json'
Plugin 'tmhedberg/SimpylFold'
Plugin 'othree/html5.vim'
"plugin 'groenewege/vim-less'

" Git plugin not hosted on GitHub
"Plugin 'git://git.wincent.com/command-t.git'
" git repos on your local machine (i.e. when working on your own plugin)
" Plugin 'file:///home/gmarik/path/to/plugin'
" The sparkup vim script is in a subdirectory of this repo called vim.
" Pass the path to set the runtimepath properly.
" Plugin 'rstacruz/sparkup', {'rtp': 'vim/'}
" Install L9 and avoid a Naming conflict if you've already installed a
" different version somewhere else.
" Plugin 'ascenator/L9', {'name': 'newL9'}

" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required
" To ignore plugin indent changes, instead use:
"filetype plugin on
"
" Brief help
" :PluginList       - lists configured plugins
" :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate
" :PluginSearch foo - searches for foo; append `!` to refresh local cache
" :PluginClean      - confirms removal of unused plugins; append `!` to auto-approve removal
"
" see :h vundle for more details or wiki for FAQ
" Put your non-Plugin stuff after this line
"
" make it usefully colored
syn on
colorscheme codeschool
set laststatus=2
let g:airline_theme = 'bubblegum'
let g:airline#extensions#tabline#enabled = 1

" setup syntastic
let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0

"Linting
let g:pymode_lint = 1
let g:pymode_lint_checker = "pyflakes,pep8"
" Auto check on save
let g:pymode_lint_write = 1

" Don't autofold code
let g:SimpylFold_docstring_preview = 2
set foldlevelstart=1


"set things for back up
set backup
set backupdir=~/.backup,.
set directory=~/.backup,.
set writebackup
set viminfo='100 "keep history of 100
set history=100
set columns=80

"set tabbing and formatting options
set tabstop=4
set softtabstop=4
set fileformat=unix
set encoding=utf-8
set clipboard=unnamed  "allow Copy-Paste

set ttimeoutlen=10000
set shiftwidth=4
set expandtab


"make sure mouse in VIM is good for large terminals.
"Probably obsoleted...
if has('mouse_sgr')
    set ttymouse=sgr
endif

"""""
"
"some functions to make it behave the way I want
"
"""""
"python with virtualenv support
"py << EOF
"#import os
"#import sys
"#if 'VIRTUAL_ENV' in os.environ:
"#  project_base_dir = os.environ['VIRTUAL_ENV']
"#  activate_this = os.path.join(project_base_dir, 'bin/activate_this.py')
"#  print project_base_dir
"#  execfile(activate_this, dict(__file__=activate_this))
"EOF



"Just a test of vim scripting
"Locate and return character 'above' current cursor position...
function! LookUpwards()
   "Locate current column and preceding line from which to copy...
   let column_num      = virtcol('.')
   let target_pattern  = '\%' . column_num . 'v.'
   let target_line_num = search(target_pattern . '*\S', 'bnW')

   "If target line found, return vertically copied character...

   if !target_line_num
      return ""
   else
      return matchstr(getline(target_line_num), target_pattern)
   endif
endfunction

"Reimplement CTRL-Y within insert mode...
imap <silent>  <C-Y>  <C-R><C-R>=LookUpwards()<CR>
