<template>
<b-crud
  :headerConfig="config.headerConfig"
  :fieldDefs="fields"
  :dataConfig="config.dataConfig"
></b-crud>
</template>

<script>
import BCrud from '@/components/crud/Crud'
export default {
  components: {
    BCrud
  },
  data: () => ({
    fields: [
      {
        text: 'Object Id',
        align: 'left',
        sortable: false,
        value: 'objectId'
      },
      {
        text: 'Service Name',
        value: 'Name',
        sortable: false,
        td_class: '',
        edit_class: 'xs12'
      },
      {
        text: 'Description',
        value: 'Description',
        sortable: false,
        td_class: '',
        edit_class: 'xs12'
      },
      {
        text: 'Type',
        value: 'ServiceType',
        sortable: false,
        td_class: '',
        edit_class: 'xs12'
      },
      {
        text: 'DataObjectId',
        value: 'DataObjectId',
        browseHidden: true,
        sortable: false,
        td_class: '',
        edit_class: 'xs12'
      }
    ],
    config: {
      dataConfig: {
        dataName: 'Service'
      },
      title: 'Services',
      headerConfig: {
        title: 'Services'
      }
    }
  })
}
</script>