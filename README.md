##Link to CodePen: 
https://codepen.io/Mariana-Ines-Torres-Pozos/pen/YPwRExQ?editors=1112

# Spiral Grid Direction Calculator

A JavaScript solution to determine the final direction when traversing an N×M grid in a spiral pattern.

## Problem Description

Starting at the top left corner (0,0) of an N×M grid and facing right, you walk one square at a time in your current direction. If you reach the grid boundary or a visited square, you turn right. The process stops when all squares are visited.

This program calculates the final direction you'll be facing.

## Algorithm

The solution uses a mathematical pattern based on grid dimensions:

- **If N > M**: 
  - M even → UP ('U')
  - M odd → DOWN ('D')
- **If N < M**:
  - N even → LEFT ('L') 
  - N odd → RIGHT ('R')
- **If N = M**:
  - N even → LEFT ('L')
  - N odd → RIGHT ('R')

Regla general:
-Si N > M: Las columnas (M) limitan → evaluamos M
-Si N < M: Las filas (N) limitan → evaluamos N
-Si N = M: Ambas limitan igual → evaluamos N (o M, da igual)
