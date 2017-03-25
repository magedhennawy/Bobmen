/**
 * Created by Maged on 3/10/2017.
 */

var passwordSaver = require('./passwordsaver.model.js');

function addItem(req,res,next){
  var item = new passwordSaver({userid:req.session.user._id, toDoList:[{todo:{title:req.body.title, description:req.body.description}, complete: false}]});
  passwordSaver.find({userid:req.session.user._id},  function (err, data) {
      if (err)
          res.send(err);
      else{
          if(data.length > 0 ){
            passwordSaver.update({userid:req.session.user._id},{$push:{toDoList: {todo:{title:req.body.title, description:req.body.description}, complete: false} }}, function (err, data) {
                  if (err)
                      res.send(err);
                  else{
                      res.json(data);
                  }
              });
          }else{
            passwordSaver.create(item, function (err, data) {
                  if (err)
                      res.send(err);
                  else{
                    res.json(data);
                  }
              });
          }
      }
  });
}

function editItem(req,res,next){
  passwordSaver.findOne({userid:req.session.user._id},  function (err, data) {
      if (err)
            res.send(err);
      else{
          data.toDoList[req.body.index].todo.title = req.body.item.title;
          data.toDoList[req.body.index].todo.description = req.body.item.description;

          passwordSaver.update({userid:req.session.user._id},{$set:{toDoList:data.toDoList}},function (err, data) {
              if (err)
                  res.send(err);
              else{
                  res.json(data);
              }
          });
      }
  });
}

function deleteItem(req,res,next){

    passwordSaver.findOne({userid:req.session.user._id},  function (err, data) {
        if (err)
            res.send(err);
        else {
            data.toDoList.splice(req.params.index, 1);
            passwordSaver.update({userid:req.session.user._id},{$set:{toDoList:data.toDoList}},function (err, data) {
            if (err)
              res.send(err);
            else{
              res.json(data);
            }
          });
        }
    });
}

function getPasswordSaver(req, res, next){
  passwordSaver.find({userid: req.session.user._id},function(err, data) {
    if (err)
      res.send(err);
    else{
      res.json(data);
    }
  });
}

module.exports = {
  getPasswordSaver: getPasswordSaver,
  addItem: addItem,
  editItem: editItem,
  deleteItem: deleteItem
};
