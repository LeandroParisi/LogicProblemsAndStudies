class Prop1 {
  public inner1? : number
  public inner2? : number

  say() {
    
  }
}

class Test {
  public prop1 : Prop1
  public prop2 : string

  private _postInit() {
    this.prop1 = this.prop1 || []
  }
  /**
   *
   */

  constructor(init : {prop1 : Prop1, prop2: string}) {
    Object.assign(this, init)
    // this._postInit()
  }
}

const teste = new Test({
  prop1: {inner1: 1, inner2: 2},
  prop2: 'teste'
})

teste!.prop1.say()

console.log(teste)

// const teste = undefined || 'teste'; => teste
// const teste = null || 'teste'; => teste
// const teste = '' || 'teste'; => teste
// const teste = 0 || 'teste'; => teste

// const teste = undefined ?? 'teste'; => teste
// const teste = null ?? 'teste'; => teste
// const teste = '' ?? 'teste'; => ""
// const teste = 0 ?? 'teste'; => 0