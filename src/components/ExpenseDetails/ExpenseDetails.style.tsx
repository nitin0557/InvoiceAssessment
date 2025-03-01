import styled from "@emotion/styled";

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
`;

export const Label = styled.label`
  display: block;
  color: #a0abbb;
  margin-bottom: 5px;
  .asterisk {
    color: #e11900;
  }
`;

export const FormTitle = styled.h3`
  color: #000;
  text-align: left;
  margin-bottom: px;
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  label {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #374151;
  }

  input {
    width: 322px;
    padding: 0.75rem;
    border: 1px solid #64748b;
    border-radius: 6px;
    font-size: 1rem;
    outline: none;
    &:focus {
      border-color: #1a73e8;
    }
  }
  &.expense-desc {
    width: 100%;

    textarea {
      height: 44px;
      padding: 0.75rem;
      border: 1px solid #64748b;
      border-radius: 6px;
      font-size: 1rem;
      outline: none;
      color: #a0abbb;

      &:focus {
        border-color: #1a73e8;
      }
    }
  }
`;

export const ErrorText = styled.div`
  color: #dc2626;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #1a73e8;
  color: white;
  font-size: 1.125rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #185abc;
  }
`;

export const ImageContainer = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  img {
    max-width: 100px;
    height: auto;
  }
`;
