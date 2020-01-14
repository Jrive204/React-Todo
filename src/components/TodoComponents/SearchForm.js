import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

function SearchForm(props) {
  return (
    <div className='formsearchdiv' alt='Todo Search Bar'>
      <Form id='formsearch' inline>
        <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
          <Label for='search' className='mr-sm-2'></Label>
          <Input
            onChange={props.handleSearchChanges}
            style={{ textAlign: `center` }}
            type='text'
            name='search'
            id='inputbox'
            placeholder='Search Todo'
          />
        </FormGroup>
      </Form>
    </div>
  );
}

export default SearchForm;
