import React from "react";
import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../../theme";
import { Item } from "../../components/item";
import { Button } from "../../components/Button";
import { ScrollView } from "react-native";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

export function Home() {
  return (
    <ScrollView>
      <Box
        flex={1}
        bg="primary_700"
        justifyContent="center"
        alignItems="center"
        p="l"
        gap="s"
      >
        <Box width="100%" bg="white" borderRadius={5} p="m">
          <Text variant="title">Plano Mensal</Text>
          <Box gap="m" borderTopWidth={1} borderColor="gray" pt="xl">
            <Item icon="timer" title="Entrega em 72h" />
            <Item icon="local-shipping" title="Delivery" />
            <Item icon="credit-card" title="R$ 99,99 por mês" />
          </Box>
          <Box flexDirection="row" mt="xl" gap="m">
            <Button title="Simular" variant="primary" />
            <Button title="Contratar" variant="secondary" />
          </Box>
        </Box>
        <Box width="100%" bg="white" borderRadius={5} p="m">
          <Text variant="title">Plano Trimestral</Text>
          <Box gap="m" borderTopWidth={1} borderColor="gray" pt="xl">
            <Item icon="timer" title="Entrega em 72h" />
            <Item icon="local-shipping" title="Delivery" />
            <Item icon="credit-card" title="R$ 79,99 por mês" />
          </Box>
          <Box flexDirection="row" mt="xl" gap="m">
            <Button title="Simular" variant="primary" />
            <Button title="Contratar" variant="secondary" />
          </Box>
        </Box>
        <Box width="100%" bg="white" borderRadius={5} p="m">
          <Text variant="title">Plano Anual</Text>
          <Box gap="m" borderTopWidth={1} borderColor="gray" pt="xl">
            <Item icon="timer" title="Entrega em 72h" />
            <Item icon="local-shipping" title="Delivery" />
            <Item icon="credit-card" title="R$ 59,99 por mês" />
          </Box>
          <Box flexDirection="row" mt="xl" gap="m">
            <Button title="Simular" variant="primary" />
            <Button title="Contratar" variant="secondary" />
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
}
