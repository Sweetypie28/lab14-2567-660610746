"use client";
import { Container, Text, Title, Space, Rating, Textarea, Button, Divider,Group, Pagination } from "@mantine/core";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState(0);

  return (
    <div>
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Space h = "sm"/>
      <Title order={4}>Your rating</Title>
      <Rating defaultValue={0} mt = "1px" mx = "1px" color="orange" size="28px" style={{ gap: '2.1px' }}/>

      <Textarea
      label={<span style={{ fontSize: '13px', fontWeight: 600 }}>Your review</span>}
      placeholder="Do you enjoy eating?"
      rows={3}
      mt="sm"
      />

      <Button mt = "9px" variant="filled" color="orange">Submit Review</Button>

      <Group grow>
        <Divider my="sm" />
      </Group>

      <Group justify="center" >
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} readOnly/>
      </Group>
      <Text ta="center" c="dimmed" fz="15">Best pizza in this world. I give you X score.</Text>
      <Group grow>
        <Divider my="sm" />
      </Group>

      <Group justify="center" >
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} readOnly/>
      </Group>
      <Text ta="center" c="dimmed" fz="15">My favourite part is peporoni</Text>

      <Group justify="center" my="sm">
        <Pagination total={20} color="orange"/>
      </Group>
      
      <Text ta="center" my="sm" c="dimmed" fz="15">
        Copyright © 2024 Chonlakorn Sutthawet 660610746
      </Text>
    </Container>
    </div>
  );
}