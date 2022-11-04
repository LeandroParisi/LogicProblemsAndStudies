import axios from 'axios'
import { Service } from 'typedi'

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export interface Posts {
  userId:number,
  id:number,
  title:string,
  body: string
}

export interface Users {
  id: number
  name: string
}

@Service()
export class ScalablePathService {
  private baseUrl = 'https://www.scalablepath.com/api/test'

  private usersRoute = 'test-users'

  private postsRoute = 'test-posts'

  public async GetPosts() : Promise<Posts[]> {
    const response = await axios.get(`${this.baseUrl}/${this.postsRoute}`)

    return response.data as Posts[]
  }

  public async GetUsers() : Promise<Users[]> {
    const response = await axios.get(`${this.baseUrl}/${this.usersRoute}`)

    return response.data as Users[]
  }
}
