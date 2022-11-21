// import React, { useState, useRef } from 'react';
// import { FormControlLabel, Switch, Typography } from '@material-ui/core';
// import { KeyboardDatePicker } from '@material-ui/pickers';

// const VIEW = {
//   YEAR: 'year',
//   MONTH: 'month',
//   DATE: 'date',
// };

// function DatePicker({
//   allowPresent = true,
//   allowHideMonth = true,
//   presentLabel = 'Current',
//   presentSwitchLabel = 'Present',
//   hideMonthSwitchLabel = 'Hide month',
//   onChange,
//   onClick,
//   TypographyProps,
//   ...props
// }) {
//   const ref = useRef();
//   const [isOpen, setIsOpen] = useState(false);
//   const [presentDate, setPresentDate] = useState();
//   const [hideMonth, setHideMonth] = useState();
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [displayedValue, setDisplayedValue] = useState();
//   const getDisplayedValue = (formattedDate) =>
//     presentDate ? presentLabel : formattedDate;
//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };
//   const ToolbarComponent = ({ openView }) => {
//     if (allowPresent && openView === VIEW.YEAR) {
//       return (
//         <FormControlLabel
//           control={
//             <Switch
//               checked={presentDate}
//               onChange={(e) => setPresentDate(e.target.checked)}
//               color="primary"
//               name="Present date"
//               inputProps={{ 'aria-label': 'Present date' }}
//             />
//           }
//           label={presentSwitchLabel}
//         />
//       );
//     }
//     if (allowHideMonth && openView === VIEW.MONTH) {
//       return (
//         <FormControlLabel
//           control={
//             <Switch
//               checked={hideMonth}
//               onChange={(e) => setHideMonth(e.target.checked)}
//               color="primary"
//               name="Hide month"
//               inputProps={{ 'aria-label': 'Present date' }}
//             />
//           }
//           label={hideMonthSwitchLabel}
//         />
//       );
//     }
//   };
//   const TextFieldComponent = (props) => {
//     return (
//       <Typography onClick={handleClick} {...TypographyProps}>
//         {getDisplayedValue(props.value)}
//       </Typography>
//     );
//   };
//   const handleClick = (e) => {
//     setIsOpen(true);
//     onClick && onClick(e);
//   };
//   return (
//     <div ref={ref}>
//       <KeyboardDatePicker
//         TextFieldComponent={TextFieldComponent}
//         ToolbarComponent={ToolbarComponent}
//         PopoverProps={{
//           anchorEl: ref.current,
//           anchorOrigin: {
//             vertical: 'bottom',
//             horizontal: 'left',
//           },
//           transformOrigin: {
//             vertical: 'top',
//             horizontal: 'left',
//           },
//         }}
//         open={isOpen}
//         onOpen={() => setIsOpen(true)}
//         onClose={() => setIsOpen(false)}
//         maxDate={new Date()}
//         variant="inline"
//         openTo="year"
//         views={['year', 'month']}
//         format={hideMonth ? 'yyyy' : 'MM/yyyy'}
//         id="date-picker-inline"
//         value={selectedDate}
//         onChange={handleDateChange}
//         KeyboardButtonProps={{
//           'aria-label': 'change date',
//         }}
//         {...props}
//       />
//     </div>
//   );
// }

// export default DatePicker;
