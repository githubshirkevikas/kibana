/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */
import createContainer from 'constate';
import type { LogExplorerFlyoutContentProps } from '../components/flyout_detail/types';

interface UseFlyoutActionsDeps {
  value: LogExplorerFlyoutContentProps['actions'];
}

const useDiscoverActions = ({ value }: UseFlyoutActionsDeps) => value;

export const [DiscoverActionsProvider, useDiscoverActionsContext] =
  createContainer(useDiscoverActions);
