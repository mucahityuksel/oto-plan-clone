export class KomutRedux<TReduser, TActions> {
    initialState: TReduser;
    actions: TActions;
    reducers: any;
    sagas: any;
  
    constructor() {
      this.initialState = (<any>{}) as any;
      this.actions = (<any>{}) as any;
    }
  
    setInitialState(state: TReduser) {
      this.initialState = state;
    }
  
    setActions(actions: TActions) {
      this.actions = actions;
    }
  
    setRedusers(reducers: any) {
      this.reducers = reducers;
    }
  
    setSagas(sagas: any) {
      this.sagas = sagas;
    }
  }
  
  export interface IKomutRedux<TReduser, SystemActions> {
    initialState: TReduser;
    actions: SystemActions;
    reducers: any;
    sagas: any;
  }
  