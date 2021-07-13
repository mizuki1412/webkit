
export const ComponentName = {
  Chart: 'kit-chart',
  DatePicker: 'kit-date-picker',
  DialogSimple: 'kit-dialog-simple',
  Empty: 'kit-empty',
  ErrChannel: 'kit-err-channel',
  Table: 'kit-table',
  Tip: 'kit-tip',
}

// 动态加载在vite中有问题，不可用
// export function useComponent(app, name){
//   app.component(name, () => import(`./${name}.vue`));
// }
