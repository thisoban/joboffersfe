import React from 'react';
import { getByText, render } from '@testing-library/react';
import Job from "../pages/Job";

test("check existing text", () => {
    const {getByText} =render (<Job/>);

    const jobdescriptontext = getByText('Job Description');
    expect(jobdescriptontext).toBeInTheDocument();

});