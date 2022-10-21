class Prop1 {
  public inner1 : number
  public inner2 : number
}

class Test {
  public prop1 : Prop1[] | null = []
  public prop2 : string

  private _postInit() {
    this.prop1 = this.prop1 || []
  }
  /**
   *
   */

  constructor(init : {prop1 : Prop1[] | null, prop2: string}) {
    Object.assign(this, init)
    // this._postInit()
  }
}

const teste = new Test({
  prop1: null,
  prop2: 'teste'
})

console.log(teste)