import { VueComponent } from 'types/vue-components';
import { Component } from 'nuxt-property-decorator';
import { VNode } from 'vue';

import BaseBlock from 'components/base/BaseBlock';
import BaseStat from 'components/base/BaseStat';
import BaseTable from 'components/base/BaseTable';

import './Profile.sass';

@Component({
  name: 'Profile',
})
export default class Profile extends VueComponent {
  public tableData = [
    {
      id: '#2178',
      subject: 'Refund request',
      date: '05/04/2018',
      status: 'Active',
    },
    {
      id: '#2179',
      subject: 'Active request',
      date: '05/04/2018',
      status: 'Active',
    },
    {
      id: '#2180',
      subject: 'Refund request',
      date: '05/04/2019',
      status: 'Resolved',
    },
    {
      id: '#2181',
      subject: 'Refund request',
      date: '05/04/2019',
      status: 'Resolved',
    },
    {
      id: '#2182',
      subject: 'Refund request',
      date: '05/04/2019',
      status: 'Resolved',
    },
    {
      id: '#2183',
      subject: 'Refund request',
      date: '05/11/2018',
      status: 'Active',
    },
    {
      id: '#2184',
      subject: 'Active request',
      date: '05/03/2018',
      status: 'Active',
    },
    {
      id: '#2185',
      subject: 'Refund request',
      date: '02/04/2019',
      status: 'Resolved',
    },
    {
      id: '#2186',
      subject: 'Refund request',
      date: '05/04/2019',
      status: 'Resolved',
    },
    {
      id: '#2187',
      subject: 'Refund request',
      date: '01/04/2019',
      status: 'Unresolved',
    },
  ];

  public tableConfig = [
    {
      key: 'id',
      title: 'Id',
    },
    {
      key: 'subject',
      title: 'Subject',
    },
    {
      key: 'date',
      title: 'Latest update',
    },
    {
      key: 'status',
      title: 'Status',
    },
  ];

  public render(): VNode {
    return (
      <section class='profile'>
        <div class='profile__container container'>
          <div class='profile__grid'>
            <BaseBlock title='Resolved tickets' class='profile__block'>
              <BaseStat value={1233} color='purple' icon='icon-mail' align='row' />
            </BaseBlock>
            <BaseBlock title='Average response' class='profile__block'>
              <BaseStat value={12} measure='m' color='darkturquoise' icon='icon-bubble' align='row' />
            </BaseBlock>
            <BaseBlock title='Median NPS' class='profile__block'>
              <BaseStat value={4.32} color='green' icon='icon-calendar' align='row' />
            </BaseBlock>
            <BaseBlock simple={true} class='profile__block'>
              <BaseTable tableConfig={this.tableConfig} tableData={this.tableData} />
            </BaseBlock>
          </div>
        </div>
      </section>
    );
  }
}
