import {
  TableComponentsContextType,
  TableComponentsContextProvider,
} from '@ctablex/core';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@material-ui/core';
import React, { PropsWithChildren } from 'react';

export const MuiComponents: TableComponentsContextType = {
  Table,
  Tbody: TableBody,
  Thead: TableHead,
  Tr: TableRow,
  Td: TableCell,
  Th: TableCell,
};

interface Props {}
export function MuiTableProvider(props: PropsWithChildren<Props>) {
  const { children } = props;
  return (
    <TableComponentsContextProvider value={MuiComponents}>
      {children}
    </TableComponentsContextProvider>
  );
}
