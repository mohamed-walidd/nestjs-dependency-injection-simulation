# NestJS Dependency Injection Simulation 🖥️

A practical mini-simulation modeling a computer architecture (Power Supply, CPU, Disk, and Computer) built to master the core fundamentals of **Modules**, **Provider Visibility Scopes**, and **Dependency Injection (DI)** in NestJS.

This project demonstrates how an Inversion of Control (IoC) container decouples class creation from application logic.

---

## 🧱 The Architecture / Module Graph

To understand how data and power flow through this system, here is how the module dependencies are registered and resolved by Nest/IoC:

```text
       [ ComputerModule ]
          /          \
         v            v
    [ CpuModule ]   [ DiskModule ]
         \            /
          v          v
        [ PowerModule ]
