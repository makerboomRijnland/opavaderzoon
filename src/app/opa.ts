export interface Persoon {
    naam: string;
    kinderen: Persoon[];
}

export const OPA = {
    naam: 'Piet',
    kinderen: [
      {
        naam: 'Reda',
        kinderen: [
          {naam: 'Narek'},
          {naam: 'Koen'},
          {naam: 'Jeremy'}
        ]
      },
      {
        naam: 'Alexander',
        kinderen: [
          {naam: 'Raymond'},
          {naam: 'Ravi'},
          {naam: 'Manuel'}
        ]
      }
    ]
  }
  