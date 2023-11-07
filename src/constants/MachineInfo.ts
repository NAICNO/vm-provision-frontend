export const machineTypes: MachineType [] = [
  {
    id: '1',
    name: 'Standard Medium',
    description: 'Standard VM for medium workloads',
    os: 'CentOS Stream 9',
    vcpu: 2,
    memory: 4,
    storage: 50
  },
  {
    id: '2',
    name: 'Standard Large',
    description: 'Standard VM for large workloads',
    os: 'CentOS Stream 9',
    vcpu: 4,
    memory: 8,
    storage: 100
  },
  {
    id: '3',
    name: 'Standard Extra Large',
    description: 'Standard VM for extra large workloads',
    os: 'CentOS Stream 9',
    vcpu: 8,
    memory: 16,
    storage: 200
  },
  {
    id: '4',
    name: 'GPU Medium',
    description: 'GPU VM for medium workloads',
    os: 'Ubuntu 20.04 LTS',
    vcpu: 2,
    memory: 4,
    storage: 50
  },
  {
    id: '5',
    name: 'GPU Large',
    description: 'Standard VM for large workloads',
    os: 'Ubuntu 20.04 LTS',
    vcpu: 4,
    memory: 8,
    storage: 100
  },
  {
    id: '6',
    name: 'GPU Extra Large',
    description: 'Standard VM for extra large workloads',
    os: 'Ubuntu 20.04 LTS',
    vcpu: 8,
    memory: 16,
    storage: 200
  }
]
