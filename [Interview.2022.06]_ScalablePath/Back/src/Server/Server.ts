/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* istanbul ignore file */

import express from 'express'
import { createExpressServer, useContainer } from 'routing-controllers'
import Container from 'typedi'
import { MainController } from './Application/Contexts/Authentication/Controllers/MainController'
import BodyParser from './Setup/BodyParser/BodyParser'
import GenerateApiDocumentation from './Setup/GenerateApiDocumentation'

export class Server {
  public App : express.Express

  private readonly Port: number = 3001;

  static readonly RoutingControllersOptions = {
    controllers: [MainController],
    middlewares: [BodyParser],
    interceptors: [],
    routePrefix: '/api',
    classTransformer: true,
    defaultErrorHandler: false,
    cors: true,
  }

  public Start() {
    this.App = createExpressServer(Server.RoutingControllersOptions)

    this.SetupDI()

    // this.ConfigureGlobalMiddlewares()

    GenerateApiDocumentation.Generate(this.App, Server.RoutingControllersOptions)
  }

  public Run() {
    const listen = this.App.listen(this.Port)

    console.log('listening')

    return listen
  }

  private SetupDI() {
    useContainer(Container)
  }
}
