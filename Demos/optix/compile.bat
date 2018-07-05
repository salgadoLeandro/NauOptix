@echo off
setlocal enabledelayedexpansion
for %%x in (%*) do (
    nvcc -ptx --use_fast_math --machine 64 -I "C:\Program Files (x86)\Windows Kits\10\Include\10.0.17134.0\ucrt" -I "C:\ProgramData\NVIDIA Corporation\OptiX SDK 5.1.0\include" --compiler-bindir "C:\Program Files (x86)\Microsoft Visual Studio 14.0\VC\bin" %%x
)
