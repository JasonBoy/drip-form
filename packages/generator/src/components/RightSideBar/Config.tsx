import React, { memo, MutableRefObject, useEffect, useState } from 'react'
import cx from 'classnames'
import styles from './index.module.css'
import PropertyConfig from './PropertyConfig'
import CheckConfig from './Check'
import { Tabs } from 'antd'
import type { DripFormRefType } from '@jdfed/drip-form'
import { useRecoilState } from 'recoil'
import { curThemeAndTypeAtom } from '@generator/store'

const { TabPane } = Tabs
interface RightSideBarType {
  formRef: MutableRefObject<DripFormRefType | undefined>
}

const TABS = {
  PROPERTY_TAB: '1',
  CHECK_TAB: '2',
}

const Config = () => {
  const [activeKey, setActiveKey] = useState(TABS.CHECK_TAB)
  // 当前选中的组件
  const [themeAndType] = useRecoilState(curThemeAndTypeAtom)
  useEffect(() => {
    console.log('themeAndType: ', themeAndType)
    setActiveKey(TABS.PROPERTY_TAB)
  }, [themeAndType])

  function isNothingSelected() {
    return themeAndType === 'root'
  }
  function isDatePicker() {
    return themeAndType === 'antd::datePicker'
  }
  return (
    <div className={cx(styles.container, 'rightSideBarGlobal')}>
      {!isNothingSelected() && (
        <Tabs activeKey={activeKey} type="card" centered>
          <TabPane tab="属性配置" key={TABS.PROPERTY_TAB}>
            <PropertyConfig />
          </TabPane>
          <TabPane tab="校验配置" key={TABS.CHECK_TAB}>
            <CheckConfig />
          </TabPane>
        </Tabs>
      )}
    </div>
  )
}

export default memo(Config)

export type { RightSideBarType }
