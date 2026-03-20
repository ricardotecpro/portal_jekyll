cmake_minimum_required(VERSION 3.28)
project(cpp_rev_oo)

set(CMAKE_CXX_STANDARD 14)

include_directories(.)

add_executable(cpp_rev_oo
        Data.h
        Emprestimo.h
        Filme.h
        Genero.h
        Principal.cpp)
