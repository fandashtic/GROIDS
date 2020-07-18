import React, { useEffect } from 'react'
import { RunUnitTest } from 'api/UnitTest/TestData';

const UnitTest = () => {

  useEffect(() => {
    RunUnitTest();
  }, []);

  return (
    <div>Unit Test</div>
  )
}

export default UnitTest;
