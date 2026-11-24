// Lista de horários do dia (00:00 até 23:00), usada no onboarding.
export const HORARIOS = Array.from(
  { length: 24 },
  (_, hora) => `${String(hora).padStart(2, '0')}:00`,
);
