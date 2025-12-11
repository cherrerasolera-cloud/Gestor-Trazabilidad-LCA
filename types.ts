import React from 'react';

export enum UserRole {
  GENERATOR = 'GENERATOR',
  COLLECTOR = 'COLLECTOR',
  AUTHORITY = 'AUTHORITY'
}

export enum WasteType {
  ACU = 'Aceite Cocina Usado',
  FOG = 'Grasas y Aceites (Trampa)'
}

export enum Status {
  PENDING = 'Pendiente',
  SCHEDULED = 'Programado',
  COLLECTED = 'Recolectado',
  PROCESSED = 'Procesado',
  CERTIFIED = 'Certificado'
}

export interface WasteRecord {
  id: string;
  generatorName: string;
  type: WasteType;
  amountKg: number;
  dateCreated: string;
  scheduledDate?: string;
  status: Status;
  hash: string; // Blockchain-like traceability hash
  co2SavedKg: number; // LCA Impact
}

export interface RoutePoint {
  id: string;
  name: string;
  lat: number;
  lng: number;
  type: 'generator' | 'depot';
  demandKg?: number;
}

export interface Certificate {
  id: string;
  recordId: string;
  recipient: string;
  issueDate: string;
  totalVolume: number;
  emissionsAvoided: number;
  verificationHash: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}