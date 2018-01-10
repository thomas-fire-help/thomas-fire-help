import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

const Button = styled.div`
  border: 1px solid white;
  padding: 5px 10px;
  color: ${({ selected }) => selected ? '#000' : '#FFF'};
  background-color: ${({ selected }) => selected ? '#FFF' : '#000'};
  margin: 10px;
  cursor: pointer;
`

export const SingleSelect = ({ value = [], options, onChange }) => (
  <Container>
    {options.map(option => (
      <Button
        key={`${option.label}`}
        selected={value.includes(option.value)}
        onClick={() => value.includes(option.value)
          ? onChange(value.filter(val => option.value !== val))
          : onChange([option.value])
        }
      >
        {option.label}
      </Button>
    ))}
  </Container>
)

export const MultiSelect = ({ value = [], options, onChange }) => (
  <Container>
    {options.map(option => (
      <Button
        key={`${option.label}`}
        selected={value.includes(option.value)}
        onClick={() => value.includes(option.value)
          ? onChange(value.filter(val => option.value !== val))
          : onChange(value.concat(option.value))
        }
      >
        {option.label}
      </Button>
    ))}
  </Container>
)

export default MultiSelect
