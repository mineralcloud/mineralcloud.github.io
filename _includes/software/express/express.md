# What is Express?

Ab initio mineral physics studies' intrinsic complexity inspired the development of workflows to automate long and extensive sequences of the ab initio calculations [1]. Here we introduce Express, a new generation of workflows designed to facilitate calculations of the thermodynamic properties of materials. These workflows are exquisitely designed and well-tested, inspired by their predecessor that is known as VLab [1].

Various materials properties can be computed in Express, e.g., static and thermal equations of state, phonon density of states, and thermodynamic properties. Each workflow consists of three steps:

1. pre-processing: dynamic generation and validation of input files;
2. processing: submitting, monitoring jobs, and retrieving output from the computing resources;
3. post-processing: analyzing results and handling errors, such as rerunning failed jobs.

The workflows are highly modularized that can be separated, chained, and customized according to practical needs. It is achieved by tracking the provenance of each step.

Written in language Julia, Express is thus born to be performant, extensible, and run on numerous high-performance platforms.

*Supported by DOE grant DESC0019759.



# How to install and cite Express?

## Installation

The express project contains more than one packages, but thanks to Julia’s builtin package manager, users do not have to worry about downloading them manually. A required package is Express.jl ([https://github.com/MineralsCloud/Express.jl](https://github.com/MineralsCloud/Express.jl)), and users can install one or many plugins to work with their software.

We provide a more detailed documentation on our website for troubleshoot- ing. And please submit an issue on our GitHub repository ([https://github.com/MineralsCloud/Express.jl/issues/new/choose](https://github.com/MineralsCloud/Express.jl/issues/new/choose)) if you have anything unclear or unsolvable.

## Cite us

Please cite the following work: [link](#)

# **Available workflows**

![]({{ site.baseurl }}/img/research/express/workflows.png)
<center>
[Figure: Schematic representation of the workflows]
</center>

This figure presents a high-level overview of the workflows we shipped in express. Each light-gray block denotes a workflow that we have and will be docu- mented below. The static elasticity block, is not currently contained in express but will be added in the near future. The white blocks mean the results ob- tained from these workflows. Starting from the equation of state (EOS) fitting workflow, we get a series of equilibrium structures. We could either then do a phonon workflow to obtain harmonic frequencies followed by a quasihar- monic (QHA) workflow to get thermodynamic properties of a material, or we could obtain static elasticity by the static elasticity workflow, and then com- bined with the QHA workflow to get thermoelastic properties where the algorithm is proposed in reference [2].

As mentioned, the workflows are highly modularized so that they can be separated, chained, and customized according to practical needs. For example, we could join the EOS, phonon, and QHA workflow into one workflow. Each workflow can have more than one implementation, as we will explain this in the following subsections.



### Equation-of-state fitting workflow

![]({{ site.baseurl }}/img/research/express/eos.png)
<center>
[Figure: Schematic representation of the equation-of-state fitting workflow (I).]
</center>
This figure shows the EOS fitting workflow, which is a zoomed-in view of the corresponding block in figure 4, denoted by “equation of state (EOS) block”. The complete procedure is:

1. Given a set of crude equation of state parameters (could be a guess or from papers), and user-desired pressures, calculate the volumes corre- sponding to these pressures.
2. Generateaseriesofinputsofself-consistent(scf)calculationsatthesevol- umes based on a template input file, send them to QUANTUM ESPRESSO.
3. Collect the outputs, extract pressures vs volumes from them and fit an approximate equation of state.
4. Similar to 1, find the volumes corresponding to user-desired pressures using the new approximate equation of state.
5. Similarto2,generateaseriesofinputsofstructureoptimizationsatthese volumes and send them to QUANTUM ESPRESSO.
6. Similar to 3, fit the final equation of state, and get the equilibrium structures.

Note that inside each gray block is a computational task, and each white block is an input or output. A gray stack means a group of concurrent tasks, while a white stack means a list of inputs or outputs distributed to each task. Some blocks are still simplified for legibility, they may contain more trivial steps, especially when interacting with external software such as QUANTUM ESPRESSO. For example, the zoomed-in stack “do structure optimizations” actually consists of three steps: input generation for QUANTUM ESPRESSO, send inputs to QUANTUM ESPRESSO for computation, and output analysis (including reading optimized structures, fitting EOS, etc.). 

The legends share the same meanings in the following two diagrams.

### Phonon workflow

![]({{ site.baseurl }}/img/research/express/phonon.png)
<center>
[Figure: Schematic representation of the phonon workflow.]
</center>

The graph of phonon workflow is similar to that of the EOS workflow. The procedure of the phonon workflow is:

1. Starting from the optimized structures in the EOS workflow, define q- points for the structures and generate input files. Send them to QUAN- TUM ESPRESSO.
2. QUANTUMESPRESSO performs scf and density functional perturbation theory (DFPT) calculations to obtain harmonic eigenvalues and eigenvec- tors at user-defined q-points.
3. Compute the force constant matrices from the eigenvectors and eigenvalues.
4. Compute the phonon frequencies in the entire Brillouin zone using the force constant matrices. Two types of calculations can be selected, one is path-mode, where phonon frequencies are calculated along a high-symmetry q-path; the other is uniform-mode, where phonon frequencies, therefore, the vibrational density of states (VDOS) are calculated with a uniform q-point mesh.

The current phonon workflow is based on the DFPT method, instead of small displacement method. This implementation is expected to be added in the future.

### Thermodynamics using QHA workflow


![]({{ site.baseurl }}/img/research/express/qha.png)
<center>
[Figure: Schematic representation of the QHA workflow]
</center>

The rough steps of a QHA workflow are

1. Determine whether it is a multi-configuration calculation or not.
2. Obtain VDOS at each statically constrained volume (of each configuration) using phonon workflow.
3. Apply phonon gas model to get free energy *F*(*T*, *V*) of each desired temperature *T* and volume *V*.
4. Derive other thermodynamic properties of the material from *F*(*T*, *V*).

The QHA workflow is explained in reference [3] in detail, please refer to it

if you have anything unclear.



# References

[1] Pedro R.C. da Silveira, Cesar R.S. da Silva, and Renata M. Wentzcovitch. Metadata management for distributed first principles calculations in vlab—a collaborative cyberinfrastructure for materials computation. Computer Physics Communications, 178(3):186–198, 2008.

[2] Zhongqing Wu and Renata M. Wentzcovitch. Quasiharmonic thermal elasticity of crystals: An analytical approach. Phys. Rev. B, 83:184115, May 2011.

[3] Tian Qin, Qi Zhang, Renata M. Wentzcovitch, and Koichiro Umemoto. qha: A python package for quasiharmonic free energy calculation for multi-configuration systems. Computer Physics Communications, 237:199– 207, 2019.