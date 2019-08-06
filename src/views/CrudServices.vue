<template>
<div>
  <b-crud
    :headerConfig="config.headerConfig"
    :fieldDefs="fields"
    :dataConfig="config.dataConfig"
  ></b-crud>
</div>
</template>

<script>
import BCrud from '@/components/crud/Crud'
export default {
  components: {
    BCrud
  },
  data: () => ({
    Testing: 'My Testing',
    fields: [
      {
        text: 'Object Id',
        align: 'left',
        sortable: false,
        width: 100,
        type: 'text-disabled',
        value: 'objectId'
      },
      {
        text: 'Service Name',
        value: 'Name',
        sortable: false,
        td_class: '',
        width: 200,
        edit_class: 'xs12'
      },
      {
        text: 'My Field',
        value: 'MField',
        sortable: false,
        td_class: '',
        width: 200,
        edit_class: 'xs12'
      },
      {
        text: 'Description',
        value: 'Description',
        sortable: false,
        td_class: '',
        width: 300,
        edit_class: 'xs12'
      },
      {
        text: 'Commands',
        value: 'Commands',
        sortable: false,
        formHidden: true,
        td_class: '',
        isCalculated: true,
        edit_class: 'xs12'
      },
      {
        text: 'Actions',
        value: 'actionColumn',
        width: '130px',
        sortable: false,
        td_class: '',
        edit_class: 'xs12'
      }
    ],
    config: {
      dataConfig: {
        dataName: 'CrudService'
      },
      title: 'Crud Services Percobaan',
      headerConfig: {
        title: 'Services Percobaan'
      }
    }
  }),
  mounted: function () {
    var me = this
    setTimeout(function () {
      me.Testing = 'Percobaan'
    }, 3000)
  }
}
</script>