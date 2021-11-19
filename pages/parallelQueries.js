import React from 'react'
/* eslint-disable react-hooks/rules-of-hooks */
import { Text, Stack, Box } from "@chakra-ui/react";
import { useQuery } from "react-query";

export default function parallelQueries() {

  const fetchMahabarath = async () => {
    const res = await fetch('http://localhost:4000/mahabarath');
    const data = await res.json();
    return data;
  }

  const fetchSuperheroes = async () => {
    const res = await fetch('http://localhost:4000/superheroes');
    const data = await res.json();
    return data;
  }

  // const resultMahabarath = useQuery('Mahabarath', fetchMahabarath);
  const { data: dataMahabarath, isLoading: isLoadingMahabarath } = useQuery('Mahabarath', fetchMahabarath);

  // const resultSuperheroes = useQuery('Superheroes', fetchSuperheroes);
  const { data: dataSuperheroes, isLoading: isLoadingSuperheroes } = useQuery('Superheroes', fetchSuperheroes);

  // if(resultMahabarath.isLoading || resultSuperheroes.isLoading)  return(<p>Loading...</p>)
  if(isLoadingMahabarath || isLoadingSuperheroes)  return(<p>Loading...</p>)


  return (
    <div>
      <Text fontSize="3xl">Parallel Queries</Text>
      <Stack>
        <Box borderWidth="2px" borderRadius="lg" p={2}> 
          {/* { resultMahabarath.data.map(ind => (<p key={ind.id}> {ind.name} </p>)) } */}
          { dataMahabarath.map(ind => (<p key={ind.id}> {ind.name} </p>)) }
        </Box>
       <Box borderWidth="2px" borderRadius="lg" p={2}> 
        {/* { resultSuperheroes.data.map(ind => (<p key={ind.id}> {ind.name} </p>)) } */}
        { dataSuperheroes.map(ind => (<p key={ind.id}> {ind.name} </p>)) }
       </Box>
      </Stack>
    </div>
  )

}


