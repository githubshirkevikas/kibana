/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { FtrProviderContext } from '../../../../ftr_provider_context';

export default function ({ getService, loadTestFile, getPageObject }: FtrProviderContext) {
  const esArchiver = getService('esArchiver');
  const browser = getService('browser');
  const svlCommonPage = getPageObject('svlCommonPage');

  describe('discover/group2', function () {
    before(async function () {
      await browser.setWindowSize(1600, 1200);
      // TODO: Serverless tests require login first
      await svlCommonPage.login();
    });

    after(async function unloadMakelogs() {
      await esArchiver.unload('test/functional/fixtures/es_archiver/logstash_functional');
    });

    loadTestFile(require.resolve('./_data_grid_doc_navigation'));
    loadTestFile(require.resolve('./_data_grid_doc_table'));
    loadTestFile(require.resolve('./_adhoc_data_views'));
  });
}
