import { FieldDepositDai } from 'components/vault/sidebar/SidebarFields'
import { VaultErrors } from 'components/vault/VaultErrors'
import { VaultWarnings } from 'components/vault/VaultWarnings'
import { GuniOpenMultiplyVaultChangesInformation } from 'features/earn/guni/open/containers/GuniOpenMultiplyVaultChangesInformation'
import { OpenGuniVaultState } from 'features/earn/guni/open/pipes/openGuniVault'
import { extractCommonErrors, extractCommonWarnings } from 'helpers/messageMappers'
import { Trans } from 'next-i18next'
import React from 'react'
import { Grid, Text } from 'theme-ui'

export function SidebarOpenGuniVaultEditingState(props: OpenGuniVaultState) {
  const {
    balanceInfo: { daiBalance },
    depositAmount,
    errorMessages,
    ilkData,
    maxMultiple,
    token,
    updateDeposit,
    updateDepositMax,
    warningMessages,
  } = props

  return (
    <Grid gap={3}>
      <Text as="p" variant="paragraph3" sx={{ color: 'text.subtitle' }}>
        <Trans
          i18nKey="vault-form.subtext.edit-multiply-dai"
          values={{ token }}
          components={{
            1: <strong />,
          }}
        />
      </Text>
      <FieldDepositDai
        depositDaiAmount={depositAmount}
        maxAmountLabelKey="balance"
        maxDepositDaiAmount={daiBalance}
        updateDepositDaiAmountMax={updateDepositMax!}
        updateDepositDaiAmount={updateDeposit!}
        errorMessages={errorMessages}
        warningMessages={warningMessages}
        ilkData={ilkData}
      />
      <Text as="p" variant="paragraph3" sx={{ color: 'text.subtitle' }}>
        {maxMultiple.toNumber().toFixed(2)}x {token}
      </Text>
      <VaultErrors {...props} errorMessages={extractCommonErrors(errorMessages)} />
      <VaultWarnings {...props} warningMessages={extractCommonWarnings(warningMessages)} />
      <GuniOpenMultiplyVaultChangesInformation {...props} />
    </Grid>
  )
}
