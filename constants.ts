import { WasteRecord, WasteType, Status, RoutePoint, Certificate } from './types';

export const MOCK_RECORDS: WasteRecord[] = [
  {
    id: 'REC-001',
    generatorName: 'Restaurante El Solar',
    type: WasteType.ACU,
    amountKg: 45.5,
    dateCreated: '2023-10-01',
    status: Status.CERTIFIED,
    hash: '0x7f83b1...a9c2',
    co2SavedKg: 120.3
  },
  {
    id: 'REC-002',
    generatorName: 'Burger King Centro',
    type: WasteType.FOG,
    amountKg: 120.0,
    dateCreated: '2023-10-05',
    status: Status.COLLECTED,
    hash: '0x3a1b9c...d4e5',
    co2SavedKg: 310.5
  },
  {
    id: 'REC-003',
    generatorName: 'Pizzería Napoli',
    type: WasteType.ACU,
    amountKg: 25.0,
    dateCreated: '2023-10-10',
    scheduledDate: '2023-10-15',
    status: Status.SCHEDULED,
    hash: '0x9f8e7d...6c5b',
    co2SavedKg: 65.2
  },
  {
    id: 'REC-004',
    generatorName: 'Hotel Grand Plaza',
    type: WasteType.ACU,
    amountKg: 200.0,
    dateCreated: '2023-10-12',
    status: Status.PENDING,
    hash: 'PENDING',
    co2SavedKg: 0
  }
];

export const MOCK_ROUTE_POINTS: RoutePoint[] = [
  { id: 'DEPOT', name: 'Centro de Acopio', lat: 50, lng: 50, type: 'depot' },
  { id: 'P1', name: 'Restaurante A', lat: 20, lng: 30, type: 'generator', demandKg: 50 },
  { id: 'P2', name: 'Restaurante B', lat: 70, lng: 20, type: 'generator', demandKg: 30 },
  { id: 'P3', name: 'Hotel C', lat: 80, lng: 60, type: 'generator', demandKg: 150 },
  { id: 'P4', name: 'Comedor D', lat: 40, lng: 80, type: 'generator', demandKg: 40 },
];

export const MOCK_CERTIFICATES: Certificate[] = [
  {
    id: 'CRT-2023-889',
    recordId: 'REC-001',
    recipient: 'Restaurante El Solar',
    issueDate: '2023-10-03',
    totalVolume: 45.5,
    emissionsAvoided: 120.3,
    verificationHash: '0x889...verified'
  }
];

export const LCA_FACTORS = {
  // Mock factors based on OpenLCA typical output for Biodiesel conversion
  co2PerKgACU: 2.85, // kg CO2e avoided per kg ACU recycled
};