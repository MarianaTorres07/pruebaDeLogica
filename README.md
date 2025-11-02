## Link to CodePen: 
spiralGrid:
https://codepen.io/Mariana-Ines-Torres-Pozos/pen/YPwRExQ?editors=1112

archaelogyData:
https://codepen.io/Mariana-Ines-Torres-Pozos/pen/VYeVymd?editors=1111

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

**Regla general**:
- Si N > M: Las columnas (M) limitan → evaluamos M
- Si N < M: Las filas (N) limitan → evaluamos N
- Si N = M: Ambas limitan igual → evaluamos N (o M, da igual)

# Roman Years Calculator 🏛️

Solución al problema de calcular la longitud máxima de números romanos para rangos de años históricos BC/AD.

## Problema Original

**Entrada:** Rangos de años en formato `"A-B"` donde A y B pueden ser `BC` o `AD`
**Salida:** Longitud máxima del número romano (sin incluir "BC"/"AD") para cualquier año en el rango

### Paso 1: Entender el sistema de años
Los años BC y AD necesitan convertirse a una línea temporal continua:
- **753 BC** = Fundación de Roma = **Año 1 AUC**
- **1 BC** = 753 años desde Roma = **Año 753 AUC**
- **1 AD** = 754 años desde Roma = **Año 754 AUC**

**Fórmula de conversión:**
- `Año BC` → `754 - año`
- `Año AD` → `753 + año`

### Paso 2: Conversión a números romanos

Años en rango: 753 AUC (1BC) a 754 AUC (1AD)
753 = "DCCLIII" → 7 caracteres
754 = "DCCLIV" → 6 caracteres
Máximo = 7