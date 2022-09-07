/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Get, JsonController } from 'routing-controllers'
import { Service } from 'typedi'
import { ScalablePathService } from './Services/ScalablePathService'

interface Response {
  id : number
  author: string
  title: string
  body: string
}

@Service()
@JsonController()
export class MainController {
  /**
   *
   */
  constructor() { }

  @Get('/posts')
  public async Post() : Promise<Response[]> {
    const service = new ScalablePathService()
    const users = await service.GetUsers()
    const posts = await service.GetPosts()

    console.log(users)
    console.log(posts)

    const response : Response[] = posts.map((p) => ({
      id: p.id,
      author: users.find((u) => u.id === p.userId).name,
      body: p.body,
      title: p.title,
    }))

    return response
  }
}
