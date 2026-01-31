

// function Loader({ size = 80 }) {
//   const positions = [
//     [28.5, 28.5], [28.5, 39.5], [28.5, 50.5], [28.5, 61.5],
//     [39.5, 28.5],                   [39.5, 61.5],
//     [50.5, 28.5],                   [50.5, 61.5],
//     [61.5, 28.5], [61.5, 39.5], [61.5, 50.5], [61.5, 61.5],
//   ];

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 100 100"
//         preserveAspectRatio="xMidYMid"
//         width={size}
//         height={size}
//         style={{ display: "block" }}
//       >
//         <g>
//           {positions.map(([y, x], i) => (
//             <rect key={i} fill="#000" height="10" width="10" y={y} x={x}>
//               <animate
//                 attributeName="fill"
//                 calcMode="discrete"
//                 begin={`${(i * 4) / positions.length}s`}
//                 dur="3s"
//                 repeatCount="indefinite"
//                 keyTimes="0;0.08333333333333333;1"
//                 values="#ffffff;#000000;#000000"
//               />
//             </rect>
//           ))}
//         </g>
//       </svg>
//     </div>
//   );
// }

// export default Loader;
// ===============================================================



function Loader({ size = 80 }) {
  const positions = [
    [28.5, 28.5], [28.5, 39.5], [28.5, 50.5], [28.5, 61.5],
    [39.5, 28.5],                   [39.5, 61.5],
    [50.5, 28.5],                   [50.5, 61.5],
    [61.5, 28.5], [61.5, 39.5], [61.5, 50.5], [61.5, 61.5],
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width={size}
        height={size}
        style={{ display: "block" }}
      >
        <g>
          {positions.map(([y, x], i) => (
            <rect key={i} fill="#000" height="10" width="10" y={y} x={x}>
              <animate
                attributeName="fill"
                calcMode="discrete"
                begin={`${(i * 4) / positions.length}s`}
                dur="3s"
                repeatCount="indefinite"
                keyTimes="0;0.08333333333333333;1"
                values="#ffffff;#000000;#000000"
              />
            </rect>
          ))}
        </g>
      </svg>
    </div>
  );
}

export default Loader;
