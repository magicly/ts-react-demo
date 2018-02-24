import * as React from 'react';
import './Counter.css';

interface Props {
  name: string;
  count?: number;
}

// export default function Counter({ name, count = 1 }: Props) {
//   return (
//     <div>
//       Counter {name}: {count}
//     </div>
//   );
// }

export default ({ name, count = 1 }: Props) => (
  <div className="counter">
    Counter {name}: {count}
  </div>
);

// export default class Counter extends React.Component<Props, object> {
//   render() {
//     const { name, count = 1 } = this.props;
//     return (
//       <div>
//         Counter {name}: {count}
//       </div>
//     );
//   }
// }
