Search.setIndex({docnames:["about_ydk","api/class_hierarchy","api/errors","api/filters","api/path/annotation","api/path/capability","api/path/codec","api/path/data_node","api/path/gnmi_session","api/path/netconf_session","api/path/path","api/path/repository","api/path/restconf_session","api/path/root_schema_node","api/path/rpc","api/path/schema_node","api/path/statement","api/providers/codec_provider","api/providers/gnmi_provider","api/providers/netconf_provider","api/providers/odl_provider","api/providers/providers","api/providers/restconf_provider","api/providers/service_provider","api/services/codec_service","api/services/crud_service","api/services/executor_service","api/services/gnmi_service","api/services/netconf_service","api/services/services","api/types","api_guide","developer_guide","faq","getting_started","guides/backward_compatibility","guides/codec_guide","guides/crud_guide","guides/deviation","guides/executor_guide","guides/introduction","guides/opendaylight","guides/path","guides/presence_class","guides/restconf_https","guides/validation","index","ydk.models"],envversion:51,filenames:["about_ydk.rst","api/class_hierarchy.rst","api/errors.rst","api/filters.rst","api/path/annotation.rst","api/path/capability.rst","api/path/codec.rst","api/path/data_node.rst","api/path/gnmi_session.rst","api/path/netconf_session.rst","api/path/path.rst","api/path/repository.rst","api/path/restconf_session.rst","api/path/root_schema_node.rst","api/path/rpc.rst","api/path/schema_node.rst","api/path/statement.rst","api/providers/codec_provider.rst","api/providers/gnmi_provider.rst","api/providers/netconf_provider.rst","api/providers/odl_provider.rst","api/providers/providers.rst","api/providers/restconf_provider.rst","api/providers/service_provider.rst","api/services/codec_service.rst","api/services/crud_service.rst","api/services/executor_service.rst","api/services/gnmi_service.rst","api/services/netconf_service.rst","api/services/services.rst","api/types.rst","api_guide.rst","developer_guide.rst","faq.rst","getting_started.rst","guides/backward_compatibility.rst","guides/codec_guide.rst","guides/crud_guide.rst","guides/deviation.rst","guides/executor_guide.rst","guides/introduction.rst","guides/opendaylight.rst","guides/path.rst","guides/presence_class.rst","guides/restconf_https.rst","guides/validation.rst","index.rst","ydk.models.rst"],objects:{"ydk.entity_utils":{JsonSubtreeCodec:[24,0,1,""],XmlSubtreeCodec:[24,0,1,""]},"ydk.entity_utils.JsonSubtreeCodec":{JsonSubtreeCodec:[24,1,1,""],decode:[24,1,1,""],encode:[24,1,1,""]},"ydk.entity_utils.XmlSubtreeCodec":{XmlSubtreeCodec:[24,1,1,""],decode:[24,1,1,""],encode:[24,1,1,""]},"ydk.errors":{YClientError:[2,3,1,""],YCodecError:[2,3,1,""],YCoreError:[2,3,1,""],YError:[2,3,1,""],YIllegalStateError:[2,3,1,""],YInvalidArgumentError:[2,3,1,""],YModelError:[2,3,1,""],YOperationNotSupportedError:[2,3,1,""],YServiceError:[2,3,1,""],YServiceProviderError:[2,3,1,""]},"ydk.ext.services":{Datastore:[28,0,1,""]},"ydk.ext.services.Datastore":{candidate:[28,4,1,""],na:[28,4,1,""],running:[28,4,1,""],startup:[28,4,1,""],url:[28,4,1,""]},"ydk.filters":{YFilter:[3,0,1,""]},"ydk.filters.YFilter":{"delete":[3,5,1,""],create:[3,5,1,""],merge:[3,5,1,""],not_set:[3,5,1,""],read:[3,5,1,""],remove:[3,5,1,""],replace:[3,5,1,""],update:[3,5,1,""]},"ydk.gnmi":{path:[8,2,0,"-"]},"ydk.gnmi.path":{gNMISession:[8,0,1,""]},"ydk.gnmi.path.gNMISession":{get_root_schema:[8,1,1,""],invoke:[8,1,1,""],subscribe:[8,1,1,""]},"ydk.gnmi.providers":{gNMIServiceProvider:[18,0,1,""]},"ydk.gnmi.services":{gNMIService:[27,0,1,""],gNMISubscription:[27,0,1,""]},"ydk.gnmi.services.gNMIService":{capabilities:[27,1,1,""],get:[27,1,1,""],set:[27,1,1,""],subscribe:[27,1,1,""]},"ydk.path":{Annotation:[4,0,1,""],Capability:[5,0,1,""],Codec:[6,0,1,""],DataNode:[7,0,1,""],NetconfSession:[9,0,1,""],Repository:[11,0,1,""],RestconfSession:[12,0,1,""],RootSchemaNode:[13,0,1,""],Rpc:[14,0,1,""],SchemaNode:[15,0,1,""],Statement:[16,0,1,""]},"ydk.path.DataNode":{__call__:[7,1,1,""],add_annotation:[7,1,1,""],annotations:[7,1,1,""],create_action:[7,1,1,""],create_datanode:[7,1,1,""],find:[7,1,1,""],get_children:[7,1,1,""],get_path:[7,1,1,""],get_root:[7,1,1,""],get_schema_node:[7,1,1,""],get_value:[7,1,1,""],remove_annotation:[7,1,1,""],set_value:[7,1,1,""]},"ydk.path.NetconfSession":{execute_netconf_operation:[9,1,1,""],get_capabilities:[9,1,1,""],get_root_schema:[9,1,1,""],invoke:[9,1,1,""]},"ydk.path.Repository":{create_root_schema:[11,1,1,""]},"ydk.path.RestconfSession":{get_capabilities:[12,1,1,""],get_root_schema:[12,1,1,""],invoke:[12,1,1,""]},"ydk.path.RootSchemaNode":{create_datanode:[13,1,1,""],create_rpc:[13,1,1,""],find:[13,1,1,""],get_parent:[13,1,1,""],get_path:[13,1,1,""],get_root:[13,1,1,""]},"ydk.path.Rpc":{__call__:[14,1,1,""],get_input_node:[14,1,1,""],get_schema_node:[14,1,1,""]},"ydk.path.SchemaNode":{find:[15,1,1,""],get_keys:[15,1,1,""],get_parent:[15,1,1,""],get_path:[15,1,1,""],get_root:[15,1,1,""],get_statement:[15,1,1,""]},"ydk.path.Statement":{arg:[16,5,1,""],keyword:[16,5,1,""]},"ydk.providers":{CodecServiceProvider:[17,0,1,""],NetconfServiceProvider:[19,0,1,""],OpendaylightServiceProvider:[20,0,1,""],RestconfServiceProvider:[22,0,1,""],ServiceProvider:[23,0,1,""]},"ydk.providers.CodecServiceProvider":{get_root_schema:[17,1,1,""],initialize:[17,1,1,""]},"ydk.providers.NetconfServiceProvider":{get_capabilities:[19,1,1,""],get_encoding:[19,1,1,""],get_session:[19,1,1,""]},"ydk.providers.OpendaylightServiceProvider":{get_node_ids:[20,1,1,""],get_node_provider:[20,1,1,""]},"ydk.providers.RestconfServiceProvider":{get_encoding:[22,1,1,""],get_session:[22,1,1,""]},"ydk.services":{CRUDService:[25,0,1,""],CodecService:[24,0,1,""],ExecutorService:[26,0,1,""],NetconfService:[28,0,1,""]},"ydk.services.CRUDService":{"delete":[25,1,1,""],create:[25,1,1,""],read:[25,1,1,""],read_config:[25,1,1,""],update:[25,1,1,""]},"ydk.services.CodecService":{decode:[24,1,1,""],encode:[24,1,1,""]},"ydk.services.ExecutorService":{execute_rpc:[26,1,1,""]},"ydk.services.NetconfService":{cancel_commit:[28,1,1,""],close_session:[28,1,1,""],commit:[28,1,1,""],copy_config:[28,1,1,""],delete_config:[28,1,1,""],discard_changes:[28,1,1,""],edit_config:[28,1,1,""],get:[28,1,1,""],get_config:[28,1,1,""],kill_session:[28,1,1,""],lock:[28,1,1,""],unlock:[28,1,1,""],validate:[28,1,1,""]},"ydk.types":{Bits:[30,0,1,""],Config:[30,0,1,""],Decimal64:[30,0,1,""],Empty:[30,0,1,""],EncodingFormat:[30,0,1,""],Entity:[30,0,1,""],EntityCollection:[30,0,1,""],Enum:[30,0,1,""],Filter:[30,0,1,""],Identity:[30,0,1,""],YLeaf:[30,0,1,""],YLeafList:[30,0,1,""],YList:[30,0,1,""],YType:[30,0,1,""],entity_diff:[30,6,1,""],entity_to_dict:[30,6,1,""]},"ydk.types.Decimal64":{value:[30,5,1,""]},"ydk.types.EncodingFormat":{JSON:[30,4,1,""],XML:[30,4,1,""]},"ydk.types.Entity":{children:[30,1,1,""],clone:[30,1,1,""],get_absolute_path:[30,1,1,""],get_segment_path:[30,1,1,""],has_data:[30,1,1,""],has_list_ancestor:[30,5,1,""],has_operation:[30,1,1,""],ignore_validation:[30,5,1,""],is_presence_container:[30,5,1,""],is_top_level_class:[30,5,1,""],parent:[30,5,1,""],yang_name:[30,5,1,""],yang_parent_name:[30,5,1,""],yfilter:[30,5,1,""],ylist_key:[30,5,1,""],ylist_key_names:[30,5,1,""]},"ydk.types.EntityCollection":{__delitem__:[30,1,1,""],__eq__:[30,1,1,""],__getitem__:[30,1,1,""],__len__:[30,1,1,""],__ne__:[30,1,1,""],clear:[30,1,1,""],entities:[30,1,1,""],get:[30,1,1,""],has_key:[30,1,1,""],keys:[30,1,1,""],pop:[30,1,1,""]},"ydk.types.YLeaf":{operation:[30,5,1,""]},"ydk.types.YType":{"boolean":[30,4,1,""],bits:[30,4,1,""],decimal64:[30,4,1,""],empty:[30,4,1,""],enumeration:[30,4,1,""],identityref:[30,4,1,""],int16:[30,4,1,""],int32:[30,4,1,""],int64:[30,4,1,""],int8:[30,4,1,""],str:[30,4,1,""],uint16:[30,4,1,""],uint32:[30,4,1,""],uint64:[30,4,1,""],uint8:[30,4,1,""]},ydk:{errors:[2,2,0,"-"],path:[16,2,0,"-"],providers:[23,2,0,"-"],types:[30,2,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","module","Python module"],"3":["py","exception","Python exception"],"4":["py","data","Python data"],"5":["py","attribute","Python attribute"],"6":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:module","3":"py:exception","4":"py:data","5":"py:attribute","6":"py:function"},terms:{"6_7_4_post1":34,"abstract":[34,40],"boolean":30,"byte":27,"case":[2,7,13,30,34,40,41,42],"class":[2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,22,23,24,25,26,27,28,30,32,34,36,39,40,41,45,46],"default":[3,8,9,11,12,18,19,20,22,27,28,30,34,36,37,44,45],"enum":[30,35],"export":[18,27,34],"final":[37,40,41],"function":[1,8,9,24,26,27,31,35,41],"import":[4,5,7,11,13,15,16,18,24,27,30,32,35,36,37,38,39,40,42,44,45],"int":[8,9,12,18,19,20,22,28,30,37],"long":[27,40],"new":[10,27,28,35,36,37,42],"public":[8,9,18,19],"return":[6,7,8,9,12,13,14,15,17,19,20,22,24,25,26,27,28,30,37,38,40,41,42],"super":[30,43],"throw":38,"true":[6,7,9,24,25,27,28,30,39,40,42,43,45],"try":[33,38,40,45],"var":18,"void":30,Afs:37,But:44,DNS:[9,19],For:[4,6,7,25,27,28,30,33,34,35,36,37,38,39,41,43,45],IDs:41,IOS:[18,24,34,36,41,42],LTS:34,Not:[2,38,40],One:[20,27,43],QOS:27,Such:34,TLS:18,The:[0,2,3,7,8,9,13,14,15,19,20,22,27,28,30,33,34,35,36,37,38,39,40,41,42,43,44,45],Then:37,There:[34,35],These:[2,34],Use:[2,9],Used:28,Using:[32,46],__call__:[7,14],__delitem__:30,__eq__:30,__exit__:38,__future__:45,__getitem__:30,__init__:[30,43],__iter__:30,__len__:30,__main__:[27,44,45],__name__:[27,44,45],__ne__:30,__setitem__:30,__str__:30,_crud:38,_exc:38,_rais:38,aaa:42,abc:37,abl:40,about:[7,10,22,46],abov:[0,37,38,40,41,42],absolut:[30,42],absolute_import:45,accept:42,accept_rout:30,access:[8,9,10,18,19,20,22,30,34,37,42,44],accord:[7,38,43],accordingli:[24,25,27,28,34],act:[24,36],action:[7,9,30,32,40,41],activ:[24,33,34,36,38],actual:45,add:[7,27,30,34,35,40,41,44],add_annot:7,added:[3,7,34,35,42,44],addhandl:[18,27,40],addit:0,address:[8,9,12,18,19,20,22,24,27,30,36,37,39,40,41,42,44],adhoc_bundl:34,adhoc_bundle_nam:34,admin:[7,13,15,16,18,24,27,41,42,45],advertis:[28,38],af_nam:[37,41],affect:34,afi:[30,40,42],afi_safi:[30,40],afi_safi_nam:[30,40],afisafi:[30,40],afisafifilt:40,afs:37,after:[18,30,33,40,41],against:45,agent:40,agre:0,agreement:0,alia:30,all:[0,2,8,18,25,27,28,30,34,37,38,40,42,44,45],all_interfac:44,all_vrf_nam:37,allow:[0,18,19,27,28,34,37,42],almost:42,along:[8,18],alreadi:[3,34,37,38],also:[0,3,13,24,27,30,33,34,37,40,44,45],altern:34,alwai:[40,42,44],anchor:44,ani:[0,3,14,26,30,33,34,40,41,42],ann:4,annot:[7,10,27,31],anoth:[28,43],answer:46,anyon:33,anyth:34,anyxml:[7,13],apach:[0,34],api:[0,7,13,15,24,25,28,29,30,32,34,46],aplic:3,app:[3,10,32,34,38,42],appear:24,append:[24,27,36,37,38,40,41],appli:[0,32],applic:[0,8,18,34,40,41,44],approach:[36,37,39,42],appropri:42,arg:[11,16,38],argpars:41,argument:[2,7,15,16,17,30,34],argumentpars:41,around:30,artifact:34,as_:[27,30,37,40,41],as_list:30,ascii:27,asctim:[18,27,40],asf:0,assign:[8,18,36,37,43],associ:[4,7,14],assum:[8,18,27,30,34,37,38,41],attach:3,attribut:[3,16,30,34,36,37,40,41,43],aug:42,augment:42,author:[8,18,34],autogener:33,automat:[30,33,34,35],autonom:37,avail:[14,33,34,35,40,41],back:[35,39],backward:[12,32,33,46],base:[0,2,11,13,23,30,34,40,41],bash:34,basi:0,basic:[32,40],becaus:38,been:[0,34],befor:[34,38],behavior:3,behind:11,being:[7,20,22,28,30,38],below:[0,18,27,30,33,34,35,36,37,38,39,40,41,42,43],between:[6,27,30,32,33,40,41],bgp:[5,7,15,16,18,27,30,34,37,40,41,42,43],bgp_cfg:40,bgp_config:37,bgp_filter:37,bgp_oper:35,bgp_read:[18,27],bgp_run:41,bgp_state:35,bgp_xr_opendaylight:41,bgpaddressfamilyenum:41,bgpcondit:43,bgpsessiondirect:30,bgpstatedata:35,big:34,bigger:27,bin:[33,34,44],binari:34,bind:40,bionic:34,bit:30,bitmap:30,bits_typ:30,bits_valu:30,block:[9,19],bool:[6,7,9,24,27,28,30],boron:41,both:34,brief:33,bug:46,build:[0,24,27,40],built:[1,31,34,40,45],built_in_t:45,bundl:[17,18,24,27,30,40,41,42,46],bundle_nam:17,c1sco12345:44,c_include_path:34,ca_file_path:18,cach:[9,11,17,19,20,22,34,41],call:[24,30,34,37,38,41,43],callabl:14,callback:[8,27],callback_funct:27,can:[3,8,10,12,13,14,18,24,27,28,30,34,36,37,38,39,40,41,42,46],cancel:28,cancel_commit:28,candid:[28,42],cannot:[7,28],cap1:5,cap2:5,cap:8,capabl:[9,10,11,12,19,27,28,31,34,43,44],captur:34,cdp:37,cento:[34,44],central:33,certain:40,certif:[8,18,32],cfg:[36,42],chang:[27,28,32,34,39,46],changelog:0,check:[0,33,34,44],checkout:0,child:[30,35,37],children:[7,13,30,45],choic:33,chosen:41,cisco:[0,11,33,34,36,38,39,41,42,44],cisco_ios_x:35,cisco_ios_xe_bgp_op:35,cisco_ios_xr:[24,36,37,39,41],cisco_ios_xr_6_3_1:34,cisco_ios_xr_6_6_3:34,cisco_ios_xr_cdp_cfg:37,cisco_ios_xr_cfgmgr_rollback_act:39,cisco_ios_xr_clns_isis_cfg:37,cisco_ios_xr_ifmgr_cfg:[24,36],cisco_ios_xr_ip_rib_ipv4_op:37,cisco_ios_xr_ipv4_bgp_cfg:41,cisco_ios_xr_ipv4_bgp_datatyp:41,cisco_ios_xr_snmp_agent_cfg:37,ciscodevnet:[0,33,34],clean:[22,34,35],clear:30,click:44,client:[2,18,19,28],clone:[0,30,33,34],close:[22,35],close_sess:28,cmake:34,cmake_library_path:34,code:[15,18,27,32,34,37,40],codec:[0,1,2,10,21,29,31,36,42],codec_provid:37,codec_servic:[37,42],codecservic:[17,24,36,37],codecserviceprovid:[17,24,36,37],collect:[24,25,27,28,30,37,40,41],com:[0,33,34,44],combin:[33,34],command:[0,34,44],comment:39,commit:[28,34],commitid:34,common:[9,40,41],common_cach:9,commun:[0,20,33,34,41,43,44],compar:[24,30,34],compat:[12,32,33,46],compil:34,complet:[30,34,40,41,45],complianc:0,compliant:42,compon:[33,40,46],compos:34,composit:30,concret:[30,40],condit:[0,40,43],config:[3,4,12,18,25,27,28,30,37,40,42],config_url_root:12,configur:[3,24,25,27,28,32,34,36,38,40,41,43],confirm:28,confirm_timeout:28,conform:[2,42],conjunct:[40,41,42],connect:[2,8,9,18,19,22,27,30,34,35,39,40,41,42],consid:[40,42,43],consist:[34,40],constraint:[2,30,45],construct:[9,19,22,24,34],constructor:[7,15],cont:42,contact:33,contain:[2,3,7,8,9,10,16,18,24,25,27,28,30,34,35,36,37,38,39,40,42,43],container2:42,content:28,contextlib:38,continu:28,contribut:46,contributor:0,control:[20,30],convert:[10,32],copi:[0,30],copy_config:28,copyright:[0,34],core:[2,30,40,41,42,46],core_vers:34,correct:34,correl:37,correspond:[3,7,20,24,34,40,41],could:[7,13,15,17,20,30,34,37,38,45],count:39,cplus_include_path:34,cpp:34,cpu0:27,creat:[3,7,9,10,11,12,13,16,18,24,25,26,27,28,30,32,33,34,38,39,40,41,45,46],create_act:[7,42],create_datanod:[7,13,15,16,42],create_root_schema:11,create_rpc:[13,42],criterion:[13,15],crt:44,crud:[0,1,18,24,29,30,31,32,35,38,44,45],crud_servic:[30,38,40,41],crudservic:[18,24,25,30,35,37,40,41,44,45],current:[0,3,7,9,15,19,28,30,33,34,45],current_dt:27,curv:34,custom:11,custom_repo:11,d665b401e363a2dbfbba5258d7705509fd76ba:0,data:[2,3,4,6,7,8,10,12,13,14,24,26,27,28,30,32,34,37,38,40,41,42,43,44,45,46],data_nod:6,datanod:[4,6,8,9,10,12,13,14,15,16,31,42],datastor:[3,28,42],datatyp:34,datetim:27,debug:[18,27,40],decemb:34,deci:30,decim:30,decimal64:30,decimal_valu:30,declar:36,decod:[2,6,17,24,36,40,41],deepli:37,def:[27,43,45],default_oper:28,default_repo:11,default_vrf:41,defaultvrf:41,defin:[4,5,7,8,12,15,17,18,24,26,27,30,34,38,39,40,42,43],definit:30,del:30,delet:[3,25,27,28,30,32,35,40,41,46],delete_config:28,demand:9,demonstr:45,dep:34,depend:33,deprec:34,descend:[13,15],describ:[4,34],descript:[34,36],design:[24,30],desir:[3,34],desri:30,destin:28,destructor:22,detail:[7,10,15,34,35,38,40,41],detect:34,develop:[0,34,40,44,46],devhub:35,deviat:[32,46],devic:[3,8,9,12,18,19,20,22,24,25,27,28,30,38,39,40,41,42,43],dict:24,dictionari:[24,30],differ:[30,32,34],dir:34,direct:24,directli:34,directori:[8,9,11,17,18,19,34],disabl:[30,32,44,46],disable_valid:45,discard_chang:28,discov:33,distribut:[0,41],dnc:12,doc:34,docker:46,document:[0,36,37,39,40,41,46],doe:[3,7,14,19,22,24,28,30,34,38,43],domain:0,done:37,doubl:44,down:40,download:[9,18,22,42],draft:12,drag:44,drive:34,due:[2,34],dummi:[30,37],dure:[30,34],dynam:38,each:[27,30,34,37],earlier:34,easi:41,easili:34,edit:[3,4,28,42],edit_config:28,edit_rpc:42,effect:42,either:[0,18,24,28,34],element:[3,7,14,30,32,34,45],els:41,empti:[5,30,37,41],ems:18,enabl:[9,11,18,27,30,34,40,41,42,44,45],enabled_list:30,encapsul:[6,24,25,27,28],encod:[0,2,6,9,10,12,17,19,20,22,24,27,30,34,36,37,40,41,42],encodingformat:[6,12,17,20,22,30,37,41,42,44],encrypt:44,enough:26,enter:44,entir:[27,28,30,32,45],entiti:[24,25,26,27,28,32,38,40,41,43,45],entity1:30,entity2:30,entity_diff:30,entity_to_dict:30,entity_util:24,entitycollect:[24,27,30],enumer:[30,35],env:[34,44],environ:[18,27,33],eol:34,err:45,error:[1,3,6,15,24,25,26,27,28,30,31,38,40,41,45],error_handl:38,error_msg:2,error_opt:28,establish:[40,41],etc:[35,40,44],evalu:30,everi:42,examin:42,exampl:[1,4,7,11,16,29,31,33,34,35,36,37,38,39,40,41,42,44,45],exc:38,excampl:13,except:[0,2,25,30,38,40,41,45],exec:38,execut:[7,8,9,12,14,26,28,32,34,42,46],execute_netconf_oper:9,execute_rpc:[26,39],executor:[1,29,31,39],executorservic:[26,39],exist:[3,11,27,28,43],exit:[34,40],expandus:11,expect:[11,24,26,27,30,34],experiment:34,explicitli:[34,35,44],explor:41,express:[0,7,10,13,15,34,42],ext:28,extend:30,extens:34,extra:34,f6b4e2d59d4eedf31ae8b2fa3119468e4c38259c:34,fail:[2,25,27,28,34,45],faithfulli:38,fals:[7,9,24,25,27,28,30,45],famili:41,featur:[38,45],fetch:41,few:[30,34],field:[9,19,30,42],file:[0,8,9,18,19,28,34,38,44],filter:[1,18,24,25,27,28,30,31,37,40],find:[7,13,15,18,30,34,40,42],first:[30,34,37,40,41,42],five:39,flag:[24,30,45],focal:34,folder:[18,44],follow:[18,27,30,34,44,45],forc:[28,39,40],fork:33,form:[10,13,34],format:[6,12,17,24,30,34,37,40,41],formatt:[18,27,40],found:[7,20,30,34,38,46],foundat:0,four_byte_a:41,fourbytea:41,framework:38,from:[0,3,4,5,7,9,11,13,15,16,18,24,25,27,28,30,33,35,36,37,38,39,40,41,42,44,45],full:[8,18,34,42],func:[8,27,38],futur:[35,44],gen:[0,24,27,33,34,38],gener:[0,10,11,30,33,40,42,43,46],get:[7,8,13,14,15,16,18,24,28,30,33,37,40,42,44,46],get_absolute_path:30,get_bitmap:30,get_cap:[9,12,19,27],get_children:7,get_config:28,get_encod:[19,22],get_input_nod:[14,42],get_kei:15,get_node_id:[20,41],get_node_provid:[20,41],get_par:[13,15],get_path:[7,13,15],get_root:[7,13,15],get_root_schema:[7,8,9,12,13,15,16,17,24,42],get_schema:42,get_schema_nod:[7,14,15,16],get_segment_path:30,get_sess:[19,22,24],get_stat:[15,16],get_valu:7,getlogg:[18,27,40],git:[0,33,34],github:[0,33,34],give:2,given:[4,7,9,11,12,13,14,15,28,30],global:[30,37,40,41,42],global_:[27,30,37,40,41],global_af:41,globalaf:41,gnmi:[0,1,8,21,24,29,31,40],gnmi_servic:27,gnmiservic:[3,27],gnmiserviceprovid:[18,24,27],gnmisess:[10,31],gnmisubscript:27,goal:34,goe:35,gopath:34,gorelik:0,goroot:34,got:30,govern:0,grace:28,grep:34,grpc:[8,18,27,34],grpc_trace:[18,27],grpc_verbos:[18,27],guid:[33,46],handl:[27,34],handle_runtime_error:38,handler:[18,27,40],hang:4,happen:32,hard:34,has:[2,4,6,9,12,22,24,25,26,27,28,30,34,35,38,45],has_data:30,has_kei:30,has_list_ancestor:30,has_oper:30,have:[0,14,18,27,30,33,34,35,37,38,40,41,42],head:34,header:34,heartbeat_interv:27,hello:30,help:[34,40,46],helper:38,henc:4,here:[30,33,34,37,40,44,45],hierarchi:[40,43,45],hold_tim:30,home:[24,27,34,41],hope:35,host:[8,18,30,40,41,44],hostnam:40,hour:34,how:[7,13,15,32,34,44,46],howev:[7,15,34,40,42,45],http:[0,32,33,34,41,46],human:24,hundr:34,ident:[30,34,35],identifi:[3,7,13,25,27,28,30,42],identityref:30,ietf:[4,34,35,42],ietf_0_1_6:34,ietf_interfac:35,if_json:36,if_xml:36,ifc:24,ifc_filt:24,ifc_read:24,ifmgr:[24,36],ignor:[3,42],ignore_valid:[30,45],illeg:2,illustr:42,imag:34,implement:[0,7,15,22,28,30,40,42,45],impli:0,inbound:30,includ:[3,18,24,27,34,42,45],indent:24,independ:40,index:34,indic:[20,27,30,38,43],individu:34,infinit:[9,19],info:[18,27,35,40],inform:[0,26,28,33,34],inherit:42,initi:[17,27,30,44],inlin:28,input:[14,39,42],ins:37,insecur:[9,19],instal:[18,27,30,32,33,36,39,41,46],install_ydk:[33,34],instanc:[5,6,7,8,9,12,13,14,15,16,17,18,19,20,22,24,25,26,27,28,30,32,37,38,39,40,41,42,43,46],instance_a:41,instance_nam:[37,41],instancea:41,instanti:[7,13,15,18,27,36,37,38,40,41,43],instruct:28,int16:30,int32:30,int64:30,int8:30,int_config:37,int_filt:37,integ:30,interact:41,interest:[34,46],interfac:[8,9,10,12,18,22,24,27,36,37,40,44],interface_configur:[24,36],interface_nam:[24,36],interfaceconfigur:[24,36],interfacetyp:35,interfacetypeident:35,intern:[8,18,30],interpret:34,interv:[27,28],intervent:34,intf:44,introduc:0,introduct:[32,46],invalid:[2,7,15,30,38,45],invok:[2,7,8,9,12,14,30,32,36,42],ios:[33,34,36,39,41,44],iosxr:44,ip_rib_route_table_nam:37,ipribroutetablenam:37,ipv4:[34,36,37],ipv4_afsf:40,ipv4_network:36,ipv4_unicast:41,ipv4unicast:40,ipv6unicast:40,is_config:35,is_presence_contain:30,is_top_level_class:30,isi:37,isn:26,isol:34,issu:[28,33,34,35,37],item:30,iter:37,its:[7,14,22,26,30,34,36,37,40,42],itself:[42,43],jcodec:24,join:[11,33,34],json:[0,12,17,20,22,24,27,30,32,33,34,41,42,44],json_ietf:27,json_provid:36,just:[4,34,35,44],karaf:41,kei:[8,9,13,15,18,19,26,30,37,40,42],key1:42,key2:42,keychain:44,keyword:16,kill_sess:28,kind:[0,4],kit:[0,34],know:37,known:37,kwarg:38,l3vpn_ipv4_unicast:42,l3vpnipv4unicast:30,l3vpnipv6multicast:30,label:39,languag:[0,34,38],last:[13,44],latest:34,law:0,ld_library_path:34,leaf:[3,7,13,32,42,43,45],leaf_typ:30,leaflist_typ:30,learn:34,leav:42,len:37,length:30,let:[34,37,41,43],level:[3,13,24,30,32,35,37,38,45],levelnam:[18,27,40],lib64:34,lib:[34,38,42],librari:[32,34,35,38,40,42],libydk:[34,35],licens:[34,46],like:[3,10,34,37,40,42,45],limit:[0,44],line:[24,34,38],linux:34,list:[3,6,7,9,11,12,13,15,19,20,24,25,27,28,32,34,35,36,40,42],live:27,load:[11,28],local:[8,17,18,28,30,34,44],locat:[11,12,17,18,33,34,40,41,44],lock:28,log:[9,12,18,19,20,22,27,32,35,38,43],logger:[18,27],logic:[34,43],longer:35,look:40,lookup:11,lookup_t:11,loopback0:[24,36],loopback:36,lot:40,machin:[34,40],maco:[34,44],mai:[0,33,35,40],main:[34,40],maintain:33,major:45,make:[28,33,34,40,41,44],manag:[40,41],manual:[30,34,43],map:[11,30,40,41],mark:[3,27,37],match:[13,15,30,42,43],match_community_set:43,matchcommunityset:43,maximum:27,mean:[4,30,42,44],member:[27,30,40,45],merg:[3,4,28],messag:[3,8,18,26,27,34,40,45],meta:34,method:[7,11,13,17,22,27,30,34,35,36,40,41,42],mgmt:44,mgmteth0:27,microsecond:[9,19],microsoft:34,minut:27,misc:18,miss:26,mkdir:[34,44],mode:[18,27,34],model:[0,2,4,5,8,9,10,11,12,14,17,18,19,20,22,24,25,26,27,28,30,32,35,36,37,38,39,42,43,44,45,46],models_path:17,modif:0,modifi:[0,37],modul:[2,5,10,11,13,30,34,37,38,39,40,42],monitor:42,more:[0,25,33,34,40,41,42],most:[39,40],mount:41,multi:[0,24],multipl:[6,25,27,28,30,32,34],multiprocess:27,must:[9,13,18,24,25,27,28,30,34,37,42,44,45],myrestconf:44,nagl:30,name:[4,5,9,12,17,18,19,20,27,30,34,35,36,37,40,42,44],namespac:4,nanosecond:27,nativ:[30,34],navig:34,necessari:41,need:[4,18,22,34,35,36,37,39,40,41,42,43,45],neg:45,neighbor:[27,30,35,40,42],neighbor_address:27,neighbor_af:42,nest:37,netconf:[0,1,3,4,9,12,21,22,29,30,31,38,39,40,42,45],netconf_sess:42,netconfservic:[28,40,45],netconfserviceprovid:[19,28,30,35,39,40,45],netconfsess:[7,10,13,15,16,19,22,31,42],netmask:36,network:[3,36],nevertheless:42,newer:35,next:40,node:[3,4,6,7,10,13,14,15,16,17,20,30,35,36,38,41,42,43],node_id:20,nodetre:7,non:[8,9,18,19,24,32,34,44,45],non_stat:37,none:[7,8,9,12,13,14,17,19,25,26,27,28,30,36,37,38,43],nonstat:37,not_set:3,notat:42,note:[3,10,13,27,32,33,36,37,39,40,41,42,45,46],noth:11,notic:[0,40],now:[27,35,37,40,41],nset:45,number8:45,number:[9,30,37,40,45],object:[2,13,18,24,27,32,34,35,36,37,38,39,41,42,43,45],obtain:[0,28,34,41,44],oc_bgp:30,oc_bgp_typ:30,oc_routing_polici:30,occur:[2,6,24,25,26,27,28,40,41],octob:0,odl:[20,41],odl_provid:41,off:18,offer:37,older:12,omit:42,on_chang:27,on_demand:9,onc:[27,34],one:[0,4,12,24,25,27,28,34,37,40,42,45],ongo:28,onli:[3,16,26,28,34,38,42,45],onward:35,opearaion:18,open:[33,34,44],openconfig:[5,7,15,16,18,27,30,34,37,38,40,42,43,44],openconfig_0_1_9:34,openconfig_bgp:[18,27,30,37,40],openconfig_bgp_typ:[30,40],openconfig_interfac:[27,37,40,44],openconfig_routing_polici:[30,43],openconfig_telemetri:38,opendaylight:[0,1,21,31,32,46],opendaylightserviceprovid:[20,41],oper:[2,3,4,12,18,25,27,28,30,34,36,37,39,40,41,42],opt:34,option:[9,18,26,28,30,34,36,40,42,43],order:[18,28,30,33,34,37,40,41,42,44,45],ordereddict:30,org:0,organ:43,origin:0,other:[30,33,34,35],otherwis:[7,8,11,25,26,28,30],our:[40,41],out:[0,35],output:[9,12,14,27,34,42,44],output_callback_funct:8,output_data:42,output_directori:34,output_xml:42,over:[0,8,37,44],overview:[32,46],overwrit:30,overwritten:28,own:34,owner:33,ownership:0,packag:[26,34,36,38,39,40,42],packet:27,param:[8,12],paramet:[3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,22,24,25,26,27,28,30],parent:[13,15,30,36,37,41,42,45],pars:[11,36,41],part:[13,27,28,34,37,38,42,45],parti:33,partial:[34,44],particular:[37,38],pass:[11,13,40,41],password:[8,9,12,18,19,20,22,24,27,39,40,41,42],path:[2,4,5,6,7,8,9,11,12,13,14,15,16,18,19,24,27,30,31,32,34,38,41,44,45,46],pattern:[30,45],payload:[3,6,10,12,20,22,24,36,38,40,41],peer:[42,44],peer_a:27,peer_typ:30,peertyp:30,peertypeenum:30,pem:18,per:34,perform:[2,4,17,18,24,25,27,28,30,34,36,37,39,40,41],period:27,perman:44,permiss:[0,44],persist:28,persist_id:28,pick:34,pip:34,pki:44,platform:[34,35],pleas:[33,34,35,40,45],plu:34,point:[13,34,40,41],pointer:[9,12,24,30],polici:[34,43],policy_definit:30,policydefinit:[30,43],poll:27,pool:27,pop:30,popul:[14,37,42],port:[8,9,12,18,19,20,22,24,27,39,40,41,44],posit:30,possibl:[26,45],prb:39,pre:34,predefin:33,predic:[13,42],prefer:34,prefix:[6,42,44],prepar:26,presenc:[30,32,36,46],present:[13,24,30,40],pretti:[6,24],previou:[33,42],previous:[28,34],primari:36,print:[8,24,27,30,34,36,37,42,44,45],print_funct:45,print_telemetry_data:27,prior:34,privat:[8,9,18,19],private_kei:[8,18],private_key_path:[9,19],procedur:[34,44],process:[8,27],produc:[24,40,45],profil:33,program:[34,38,40],programm:40,programmat:[39,41],project:33,protect:0,proto:[27,40],protobuf:[8,27],protocol:[0,3,9,10,19,34,40,41,44],provid:[0,1,2,4,5,6,7,9,10,11,12,14,23,24,25,26,27,28,30,31,32,34,35,36,37,38,39,44,45],public_key_path:[9,19],pull:33,purpos:45,put:18,pwd:34,python2:34,python3:[34,38],python:[0,2,6,7,10,13,15,17,22,24,25,27,28,30,33,34,36,38,39,40,41,42,44,46],python_venv:34,qos:27,question:46,quickli:34,rais:[6,7,15,20,24,25,26,27,28,30,38,40,41],ran:34,rang:[30,45],react:45,read:[3,16,18,24,25,27,28,32,35,40,41,44,46],read_config:[25,37],read_filt:[27,37],read_mod:27,readabl:24,readconfig:40,receiv:27,recent:39,recogn:42,recommend:34,recurs:30,reduc:34,refer:[4,33,34,35],referenc:43,regard:0,rel:[13,30,34,42],relat:[3,10,33,34],releas:[28,33,35,44,46],remot:28,remov:[3,7],remove_annot:7,renam:35,replac:[3,27,28,32,35],repli:[9,40,41,42],repo:[8,9,12,17,18,19,20,22,24,27,34,41,44],repo_path:11,report:46,repositori:[8,9,10,12,17,18,19,20,22,24,27,31,34,41,44],repres:[7,9,12,13,14,15,16,19,24,25,27,28,30,36,37,40,43],represent:[7,8,13,27,30],request:[28,33,40],requir:[0,9,19,28,35,46],reserv:0,respect:[10,33,37],respons:[8,9,11,27,40,41],rest:37,restconf:[0,1,12,21,31,32,41,46],restconfserviceprovid:[22,44],restconfsess:[10,31],result:[24,30,37,38,40,41,45],retriev:[18,28,30],revert:28,revis:[5,34,42],rfc:[12,30,42,43],rhel:34,rib:37,rib_op:37,right:[0,2],roll:39,roll_back_configuration_to:39,rollback:[28,32],rollbackconfigurationlast:39,root:[7,11,13,15,17,34,42],root_schema:[7,13,15,16,24,42],root_schema_nod:6,rootschemanod:[6,7,8,9,10,11,12,15,16,17,24,31,42],rout:37,route_table_nam:37,router:[18,30,36],router_id:[30,37],routing_polici:30,routingpolici:[30,43],rp0:27,rpc:[3,4,8,9,10,12,13,26,31,32,40,46],rpc_entiti:26,rtype:15,rule:[37,40],run:[18,25,28,34,37,40,41],run_test:45,runner:[30,45],runtimeerror:6,saf:37,saf_nam:37,safi:[30,40,42],same:[28,30,42],sampl:[27,34,40,41],sample_interv:27,saniti:[30,45],satisfi:[7,13,15,30,34],sbx:44,scene:11,schema:[7,11,13,14,15,16,17,38,41,42],schema_nod:[15,16],schemanod:[7,10,11,13,14,31,42],schematre:[13,15],scope:35,script:[0,24,27,33,42,45],sdk:34,search:11,second:30,section:[34,42,44],secur:[8,9,18,19,44],see:[0,7,13,15,23,30,34,40,41,45],segment:30,select:44,self:[26,30,38,42,43,44],semant:34,send:[9,38],sent:[27,45],separ:34,sequenc:[30,34],server:[2,3,8,9,12,18,19,22,26,27,38,40,42,44,45],server_certif:[8,18],servic:[0,1,2,7,11,14,23,30,31,32,35,36,37,38,39,44,45],service_provid:[7,14],serviceprovid:[1,7,14,20,21,25,26,31,40,41],session:[7,8,9,13,15,16,22,28,40,41,42],session_id:28,set:[3,7,8,11,13,18,24,28,33,34,36,37,40,41,42,43,45],set_filt:30,set_valu:7,setformatt:[18,27,40],setlevel:[18,27,40],share:[24,34,44],shell:34,shortcut:37,should:[7,11,13,27,30,34,40,44],show:[34,40,44],shown:[18,27,34,38,42,43],side:[2,26],sign:44,signal:28,silent:[3,27],similar:9,similarli:40,simpl:[34,40],simpli:[30,34],simplifi:[40,41],sinc:[0,22,43],singl:[6,13,24,25,27,28,30,40,42],site:38,size:34,skip:34,slightli:34,small:[34,42],snippet:[32,40,42],snmp:37,softwar:[0,33,34],sole:45,solut:0,some:[0,4,34,36,37,38,39,40,41,42],someth:46,sometim:45,sourc:[0,28,33,44],source_config:28,southbound:41,sp_instanc:40,special:2,specif:[0,3,18,30,34,37,42],specifi:[8,9,17,18,24,27,28,30,34,40,42,44],split:45,sr2:41,ssh:[9,19,40,43],ssl:44,stamp:40,standard:[34,38,42],start:[40,46],startup:28,state:[2,25,27,28,38,42],state_url_root:12,statement:[10,15,30,31,38,43],std:30,stdout:[8,27],step:[33,34,40,41],still:[40,42],stop:28,storag:28,store:[9,17,19,20,22,34],str:[4,5,6,7,8,9,11,12,13,15,16,17,18,19,20,22,24,27,28,30],straight:40,stream:[27,34],streamhandl:[18,27,40],strftime:27,string:[0,5,6,7,8,9,11,13,15,17,24,27,30,34,36,38,42,45],style:43,subclass:2,subcript:27,submit:33,submodul:[13,42],subpackag:26,subscrib:8,subscriberespons:[8,27],subscript:[8,27,38],subscription_id:38,subscription_mod:27,subset:42,subsystem:34,subtre:24,succe:[7,14,28],success:[25,27],successfulli:25,sudo:[34,44],suffici:42,suggest:35,suppli:[7,30],support:[0,2,3,8,9,12,18,19,20,22,23,24,25,27,28,32,38,42,43,44,46],suppos:42,suppress_redund:27,sur:34,sure:[34,44],syntax:32,sys:41,system:[0,8,27,28,35,37,38,46],tabl:11,table_nam:37,tag:3,take:[14,34],tar:34,target:[3,28,42],target_defin:27,tcp:[9,19,40],telemetri:[27,38],telemetrysystem:38,temporari:9,term:30,termin:[13,28],test:[18,27,28,30,34,39,40,41,42,45],test_opt:28,than:[30,42],thei:42,them:42,therefor:34,thi:[0,2,3,7,8,9,10,11,12,13,14,15,16,17,20,24,27,28,30,34,35,36,37,39,40,41,42,43,44,45,46],thing:38,third:33,those:[34,42],three:34,through:[7,14,15,45],thrown:[2,3,30],time:[27,34,40],timeout:[9,19,28,37],timer:[30,37],tls:18,togeth:37,tool:[0,33,34],top:[13,24,30,32,35,37,38,45],top_ent:26,trace:[18,27],traceback:38,tracker:33,translat:[0,6],transport:[40,41],transport_secur:[18,27],trap:37,travers:40,tree:[11,12,13,14,15,27,40,42],trust:44,tupl:30,two:[30,40,43],type:[1,7,11,12,13,14,15,17,19,20,22,24,25,27,28,31,34,35,36,37,38,40,41,42,43,44,45],types_list:30,typic:34,ubuntu:[34,44],uint16:30,uint32:30,uint64:30,uint8:[30,45],uint8_valu:45,under:[0,24,26,30,34,44],underli:[30,40,41],underneath:32,unicast:37,uniqu:30,unless:0,unlock:28,unsign:30,unsupport:[34,38],updat:[3,25,27,30,32,40,41,44,46],url:[28,34],urllib:41,urlpars:41,usag:[4,11,13,16,30,34,40],use:[0,5,7,11,13,15,24,32,33,34,46],used:[3,8,9,10,11,12,13,14,17,18,19,20,22,24,27,28,30,34,35,36,37,39,40,42,44,46],useful:[4,40,42],user:[7,8,9,15,17,18,19,20,22,27,30,34,37,38,40,41,43,44],usernam:[8,9,12,18,19,20,22,24,27,39,40,41,42],uses:[4,34,40,41],using:[0,10,11,18,24,27,34,35,37,38,40,41,42,43,44],usr:[34,44],usual:24,util:[1,31],val:42,valid:[1,2,7,10,24,28,31,32,42,46],valu:[4,7,8,9,13,18,22,24,27,37,38,42,45],vari:38,variabl:[18,27],variou:[0,3,28,30,35],vector:15,vendor:34,venv:[33,34],verbos:34,veri:42,verif:44,version:[34,38,40,41,46],version_info:41,via:[19,38],view:[2,34],violat:2,virtual:[33,34],vrf:37,vrf_default:37,vrf_list:37,vrf_name:37,vstr:45,wai:[24,40,42],want:[34,37],warranti:0,websit:35,welcom:[33,46],well:24,were:[40,41],what:[32,46],whatev:27,when:[2,3,24,26,27,28,34,35,37,38,40,41,44,45],where:[18,25,30,33,34],whether:[27,34],which:[0,8,9,10,12,13,15,18,19,22,24,27,28,30,34,35,36,37,38,40,42,45],whole:27,window:[32,34],within:34,without:[0,34,42],work:[0,7,18,32,40,46],workaround:34,workspac:27,worri:22,wrapper:[7,15,22,30],write:[0,10,32],written:[40,41,42],wsl:34,www:0,xenial:34,xml:[0,3,9,17,24,30,32,37,40,41,42],xml_encod:37,xml_provid:36,xpath:[7,10,13,15,30,42],xr_6_5_1:33,xr_6_5_3:34,xr_bgp:41,xr_bgp_type:41,xyz:[37,42],yan:[0,24,27],yang:[0,1,2,4,7,8,9,10,11,12,13,14,15,16,17,18,19,24,31,32,33,34,35,37,38,39,40,41,43,45,46],yang_models_loc:[18,27],yang_nam:[30,43],yang_parent_nam:[30,43],yangmodel:34,yclienterror:2,ycodecerror:[2,6],ycoreerror:2,ydk:[2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,22,23,24,25,26,27,28,31,32,35,36,37,39,40,42,43,44,45,46],ydk_venv:34,ydk_vne:34,ydkgen:30,ydkgen_hom:34,ydksolut:34,ydktest:[30,45],ydktest_san:[30,45],yerror:[2,7,40,41],yfilter:[3,27,30,35,37],ygorelik:[0,44],yillegalstateerror:2,yinvalidargumenterror:[2,7,15,24,30],yleaf:[30,37],yleaflist:30,ylist:[30,34,37],ylist_kei:30,ylist_key_nam:30,ymodelerror:[2,30,38,45],yoperationnotsupportederror:2,you:[0,18,27,30,34,37,38,40,41,44,46],your:[3,33,34,40,44],ypatherror:[7,15],ysaniti:30,yserviceerror:[2,24],yserviceprovidererror:[2,3,20,25,26,27,28,45],ytype:[30,45]},titles:["About YDK","YDK API","Errors","Filters","Annotation","Capability","Codec","DataNode","gNMISession","NetconfSession","YDK Path API","Repository","RestconfSession","RootSchemaNode","Rpc","SchemaNode","Statement","Codec Service Provider","gNMI Service Provider","NETCONF Service Provider","Opendaylight Service Provider","Service Providers","RESTCONF Service Provider","ServiceProvider","Codec Services","CRUD Service","Executor Service","gNMI Service API","NETCONF Service","Services","Types","API Guide","Developer Guide","Questions and Answers","Getting Started","Backward compatibility notes","How do I work with instances of YANG data?","How do I create, update, read and delete?","What are deviations?","How do I execute RPCs?","Introduction","How do I use OpenDaylight with YDK?","How do I use the Path API?","What are presence classes?","Using Restconf with HTTPS","How to Disable Validation","Contents:","YDK Model API"],titleterms:{"class":[37,43],"function":30,"import":41,Adding:34,Using:[40,41,44],about:0,action:42,adhoc:34,annot:4,answer:33,api:[1,10,27,31,33,35,40,41,42,47],app:[40,41],append:30,appli:37,assign:30,backward:[34,35],basic:42,between:36,bug:33,build:34,built:30,bundl:[33,34],can:33,capabl:5,certif:44,chang:[0,33,35],code:44,codec:[6,17,24],compat:[34,35],compon:34,configur:[37,42],content:[27,30,34,35,36,37,38,39,40,41,42,46],contribut:33,convert:36,core:[33,34],creat:[37,42],crud:[25,37,40,41],data:36,datanod:7,delet:37,depend:34,develop:32,deviat:38,differ:42,disabl:45,docker:34,document:34,element:37,entir:37,entiti:[30,37],environ:34,error:2,exampl:[18,24,27,30],execut:39,executor:26,filter:3,found:33,from:34,gener:34,get:[27,34],gnmi:[18,27,34],gnmisess:8,guid:[31,32],happen:[40,41],help:33,hood:40,how:[30,33,36,37,38,39,40,41,42,45],http:44,instal:[34,35,44],instanc:36,instanti:30,interest:33,introduct:40,invok:[40,41],json:36,jsonsubtreecodec:24,leaf:[30,37],leav:30,level:40,librari:41,licens:0,limit:40,list:[30,37],log:[40,41],model:[33,34,40,41,47],multipl:37,netconf:[19,28],netconfsess:9,non:40,note:[34,35],object:[30,40],opendaylight:[20,41],overview:[34,38],parti:34,path:[10,42],presenc:[37,43],profil:34,provid:[17,18,19,20,21,22,40,41],question:33,quick:34,read:[30,37],releas:[0,34],replac:37,report:33,repositori:11,requir:34,restconf:[22,44],restconfsess:12,rollback:39,rootschemanod:13,rpc:[14,39,42],runtim:34,schemanod:15,script:34,servic:[17,18,19,20,21,22,24,25,26,27,28,29,34,40,41],serviceprovid:23,set:[27,30],snippet:44,someth:33,sourc:34,start:34,statement:16,subscrib:27,support:[34,35],syntax:42,system:34,tabl:[27,30,34,35,36,37,38,39,40,42],thi:33,third:34,top:40,type:30,under:40,underneath:[40,41],updat:37,usag:24,use:[30,38,40,41,42],used:33,util:30,valid:[30,45],valu:30,variabl:34,version:[0,33],what:[33,38,40,41,42,43],window:35,work:[36,42],write:[40,41],xml:36,xmlsubtreecodec:24,yang:[30,36,42],ydk:[0,1,10,30,33,34,38,41,47],you:33}})