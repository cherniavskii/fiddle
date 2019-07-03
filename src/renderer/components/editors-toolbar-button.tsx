import * as React from 'react';

import { Button } from '@blueprintjs/core';
import { MosaicContext } from 'react-mosaic-component';

import { DocsDemoPage, MosaicId } from '../../interfaces';
import { AppState } from '../state';

export interface ToolbarButtonProps {
  appState: AppState;
  id: MosaicId;
}

export class MaximizeButton extends React.PureComponent<ToolbarButtonProps> {
  public context: MosaicContext<MosaicId>;

  constructor(props: ToolbarButtonProps) {
    super(props);

    this.expand = this.expand.bind(this);
  }

  public render() {
    return (
      <Button
        icon='maximize'
        className='bp3-small'
        onClick={this.expand}
      />
    );
  }

  /**
   * Expand this panel
   */
  public expand() {
    const path = this.context.mosaicWindowActions.getPath();
    // return this.context.mosaicActions.expand(path);
    return this.context.mosaicWindowActions.;
  }
}

export class RemoveButton extends React.PureComponent<ToolbarButtonProps> {
  public static contextTypes = MosaicWindowContext;
  public context: MosaicWindowContext;

  constructor(props: ToolbarButtonProps) {
    super(props);
    this.remove = this.remove.bind(this);
  }

  public render() {
    return (
      <Button
        icon='cross'
        className='bp3-small'
        onClick={this.remove}
      />
    );
  }

  /**
   * Remove this panel
   */
  public remove() {
    this.props.appState.hideAndBackupMosaic(this.props.id);
  }
}

export class DocsDemoGoHomeButton extends React.PureComponent<ToolbarButtonProps> {
  public static contextTypes = MosaicWindowContext;
  public context: MosaicWindowContext<MosaicId>;

  constructor(props: ToolbarButtonProps) {
    super(props);
    this.goHome = this.goHome.bind(this);
  }

  public render() {
    return (
      <Button
        icon='home'
        className='bp3-small'
        onClick={this.goHome}
        text='Overview'
      />
    );
  }

  /**
   * Remove this panel
   */
  public goHome() {
    this.props.appState.currentDocsDemoPage = DocsDemoPage.DEFAULT;
  }
}
