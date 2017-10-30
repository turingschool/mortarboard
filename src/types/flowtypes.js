// @flow
export type ApplicantType = {
  applyAction: string,
  applyStatus: string,
  birthdate: string,
  createdAt: string,
  email: string,
  firstName: string,
  github: string,
  id: string,
  lastName: string,
  referredBy: string,
  resume: string,
  scoreLogicEvaluation: number,
  scoreOnlineLogicTest: number,
  scoreValuesEvaluation: number,
  startDate: string,
  updatedAt: string,
}

export type EvaluationType = {
  name: string,
}

// TODO: There is probably an offical History flow typing out there
export type HistoryType = {
  goBack: Function,
  replace: Function,
}

export type LocationType = {
  key: string,
  pathname: string,
}

export type MatchType = {
  url: string,
}
