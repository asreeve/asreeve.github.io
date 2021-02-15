1) write a python script to solve the model I step through in the notes
   in a general way so conditions could be changed

2) determine how to add recharge to the equations.

The basic constraints for the first groundwater flow model: \* 4 rows, 3
columns, 1 layer \* steady state \* no flow around perimiter of model \*
contant head = 100 m on NE corner cell (only one cell) \* each cell is
1000 m by 1000 m \* impermeable lower boundary at 95 m \* aquifer
composed of fine sand \* assume saturated thickness constant

.. code:: ipython3

    # load necessary packages
    import numpy as np

.. code:: ipython3

    # define basic model paramters, keep everything in units of meters and seconds
    
    delx = 1000
    dely = 1000
    nx=3
    ny=4
    K=1.e-4
    S=0.1
    bot=95

Create arrays to identify constant head cells and cells containing
source sinks.

Const_hd array is set to value of constant head or to a value (-9.9
below) indicating it is not a constant head cell.

ssinks array set to flux rate, with zero indicating no flux.

.. code:: ipython3

    # create grid to define characteristics
    not_const=-9.9
    ssinks = np.zeros([4,3])
    const_hd = np.zeros([4,3]) + not_const
    start_hd = np.zeros([4,3])
    
    ncells=nx*ny

Create array A and vector b to calculate heads h. Values set initially
to zero to be changed later. These will be modified to create an
equaltion of the form:

$

.. raw:: latex

   \begin{bmatrix}
   b_1\\
   b_2
   \end{bmatrix}

=

.. raw:: latex

   \begin{bmatrix}
   A_{1,1} & A_{1,2} \\
   A_{2,1} & A_{2,2} \\
   \end{bmatrix}
   \begin{bmatrix}
   h_1\\
   h_2
   \end{bmatrix}

$

.. code:: ipython3

    # create array for doing calcs
    A = np.zeros([ncells,ncells])
    b = np.zeros([ncells,1])

Set pumping rate to 0.2 :math:`\frac{m^2}{sec}` (3170 gpm).

Set recharge to :math:`3\cdot 10^{-9} \frac{m}{sec}`, need to multiply
by surface area of cell and divide by cell area for 2-D model

.. code:: ipython3

    # set const_hd
    const_hd[3,2]=100.
    # set pumping well
    ssinks[1,1]= .2
    
    # add recharge
    ssinks = ssinks - (3e-9*1000**2)/(5*1000**2)

Loop over all the cells and set values in matrix A and vector b.

Entrys are based on fluxes across each cell face labeled n,s,e,w (north,
south, east, west). If a cell face is at edge of mode, treat as no flow
and zero these entrys. Because this is a model with constant K, steady
state, and :math:`\Delta x = \Delta y`, the creation of A and b are
greatly simplified.

Here the 4 by 3 model grid is converted from a y, x (or row, column)
coordinates to a cell number. Concersion from one to the other
coordinate system is done based on:

:math:`cell\_num = col + row \cdot num\_cols`

.. code:: ipython3

    for y in range(ny):
        for x in range(nx):
            cell = x + y * nx
            cell_n = cell + nx
            cell_s = cell - nx
            cell_e = cell + 1
            cell_w = cell - 1
            # is cell constant head?
            if const_hd[y,x] != not_const:
                A[cell,cell] = 1.
                b[cell,0] = const_hd[y,x]
            else:
                # account for cell fluxes across faces
                if 0<=y+1<ny:
                    A[cell,cell]-=1
                    A[cell,cell_n]+=1
                if 0<=y-1<ny:
                    A[cell,cell]-=1
                    A[cell,cell_s]+=1
                if 0<=x+1<nx:
                    A[cell,cell]-=1
                    A[cell,cell_e]+=1
                if 0<=x-1<nx:
                    A[cell,cell]-=1
                    A[cell,cell_w]+=1
                # add sources/sinks
                if ssinks[y,x]!=0:
                    b[cell,0]+=ssinks[y,x]
                    

Solve the constructed equations using numpy’s linalg package

.. code:: ipython3

    h=np.linalg.solve(A,b)

Reshape hyd. head vector to match original model grid

.. code:: ipython3

    # show hydr. head results
    print(h.reshape(4,3))


.. parsed-literal::

    [[ 99.7942029   99.78766046  99.80372671]
     [ 99.80074535  99.76505177  99.81979297]
     [ 99.84298137  99.85200829  99.89060042]
     [ 99.87619048  99.90939959 100.        ]]

