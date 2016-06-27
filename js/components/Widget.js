import React from 'react';

const WidgetBody = (props) => <div className="widget-body">{props.widget.body}</div>;
const WidgetEditBtn = (props) => <div onClick={props.handleEditBtnClick} className="btn-edit">edit</div>;
const WidgetDeleteBtn = (props) => <div className="btn-delete">delete</div>;
const WidgetTimeOriginal = (props) => <div className="timestamp-original">{props.widget.dateCreated}</div>;
const WidgetTimeEdited = (props) => <div className="timestamp-edited">{props.widget.dateEdited}</div>;
const WidgetTime = (props) =>
  props.widget.dateEdited ? <WidgetTimeEdited {...props} /> : <WidgetTimeOriginal {...props} />;

const Widget = (props) => {
  const handleEditBtnClick = () => {
    props.updateState({ activeWidgetId : props.widget.id });
  };
  
  return (
    <li>
      <div className="widget-row">
        <WidgetBody {...props} />
        <WidgetEditBtn handleEditBtnClick={handleEditBtnClick} {...props} />
        <WidgetDeleteBtn  {...props} />
      </div>
      <WidgetTime {...props} />
    </li>
  );
};


export default Widget;
