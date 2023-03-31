import React from 'react';
import Select from 'react-select';

function Selector({ options, value, onChange , label}) {
  return (
    <div>
      <label htmlFor="localidad" className="font-bold">
        {label}
      </label>
      <Select
        options={options}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Selector;
