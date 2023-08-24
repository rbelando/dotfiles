# dotfiles
My dotfiles


## Setup
```sh
git init --bare $HOME/.cfg
alias dotfiles='git --git-dir=$HOME/.cfg/ --work-tree=$HOME'
dotfiles remote add origin git@github.com:rbelando/dotfiles.git
```

# Usage
```sh
dotfiles status
dotfiles add .vimrc
dotfiles commit -m "Add vimrc"
dotfiles add .bashrc
dotfiles commit -m "Add bashrc"
dotfiles push
```


# references
https://news.ycombinator.com/item?id=11070797
https://www.atlassian.com/git/tutorials/dotfiles
