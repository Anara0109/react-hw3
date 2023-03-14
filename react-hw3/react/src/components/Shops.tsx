import {IStor} from "../type"
import { FC } from "react";
 
interface IShops {
  arrStors: IStor[]
}

const Shops :FC<IShops>  = (props) => {
  //@ts-ignor
  const stors = props.arrStors.map(item => <tr key={item.id}>
    <td>{item.name}</td>
    <td>{item.start}</td>
    <td>{item.finish}</td>
    <td>{item.distance}</td>
    <td>{item.special ? "✓" : "-"}</td>
  </tr>)
  return (
    <div className="block-shops">
      <table>
        <tbody>
        <tr>
          <th>
            Название магазина
          </th>
          <th>
            Начало работы
          </th>
          <th>
            Окончания работы
          </th>
          <th>
            Удаленность от центра
          </th>
          <th>
            Важный для поставщика
          </th>
        </tr>

        {stors}

        </tbody>
      </table>
    </div>
  )

}

export default Shops