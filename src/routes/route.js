
// import React, { Component, lazy, Suspense } from "react";
// import { Route, Routes } from "react-router-dom";
// // import { Home } from "../components/pages/Home";
// // import { Meditate } from "../components/pages/Meditate";
// // import { Sleep } from "../components/pages/Sleep";
// // import { Movement } from '../components/pages/Movement';
// // import { CalmKids } from '../components/pages/Calmkids';
// // import { ForWork } from '../components/pages/Forwork';
// // import { Wisdom } from '../components/pages/Wisdom';
// // import { Music } from '../components/pages/Music';


// const Home = lazy(() => import('../components/pages/Home'))
// const Meditate = lazy(() => import('../components/pages/Meditate'))
// const Sleep = lazy(()=> import('../components/pages/Sleep'))


// class RouterClass extends Component {
//   render() {
//     return (
//       <div className="main-content">
//         <Suspense fallback={<div className="container spinner"></div>}>
//           <Routes>
//             <Route exact path="/home" component={Home}  />
//             <Route path="/meditate" component={Meditate}  />
//             <Route path="/sleep" component={Sleep}  />
//             {/* <Route path="/music" component={Music}  />
//             <Route path="/for-work" component={Forwork}  />
//             <Route path="/wisdom" component={Wisdom}  />
//             <Route path="/calm-kids" component={CalmKids}  />
//             <Route path="/movement" component={Movement}  /> */}
//             {/* <Route path="/meditate" element={<Meditate />} />
//             <Route path="/sleep" element={<Sleep />} />
//             <Route path="/music" element={<Music />} />
//             <Route path="/for-work" element={<ForWork />} />
//             <Route path="/wisdom" element={<Wisdom />} />
//             <Route path="/calm-kids" element={<CalmKids />} />
//             <Route path="/movement" element={<Movement />} /> */}
//           </Routes>
//         </Suspense>
//       </div>
//     );
//   }
// }

// export default RouterClass;
