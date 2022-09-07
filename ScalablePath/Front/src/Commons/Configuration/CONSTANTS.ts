/* eslint-disable no-shadow */

require('dotenv/config')

const { env } = process

export enum Envs {
  TEST = 'test',
  LOCAL = 'local',
  DSV = 'dsv',
  PROD = 'prd',
}

export default class CONSTANTS {
  static ENV : Envs = env.NODE_ENV as Envs

  static PORT = Number(env.PORT)
}
