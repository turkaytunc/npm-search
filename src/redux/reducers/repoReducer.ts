interface RepoState {
  loading: boolean;
  error: string | null;
  data: string[];
}
const repoReducer = (state: RepoState, action: any) => {
  switch (action.type) {
    case 'search':
      return { loading: true, error: null, data: [] };
    case 'success':
      return { loading: false, error: null, data: action.payload };
    case 'error':
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default repoReducer;
